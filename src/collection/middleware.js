import Ajv from "ajv";

import {find} from "./utils";

export function validate (schema) {
    const ajv = new Ajv();
    const doValidate = ajv.compile(schema);
    return (req, res, next) => {
        var isValid = true;
        if (req.method === "POST" || req.method === "PUT") {
            isValid = doValidate(req.body);
        }
        if (!isValid) {
            res.status(400).send({
                message: "Invalid body",
                details: doValidate.errors
            });
        } else {
            next();
        }
    };
}

export function decorateWithCollection (name) {
    return (req, res, next) => {
        req.collection = name;
        next();
    };
}

export function decorateWithExistingElement () {
    return async (req, res, next) => {
        if (req.method === "POST") {
            req.elementId = req.body.id;
        } else if (req.method === "PUT" || req.method === "DELETE") {
            req.elementId = req.params.id;
        }
        req.existingElement = (
            req.elementId ? await find(req.collection, req.elementId) : null
        );
        next();
    };
}

export function authorize (auth) {
    return async (req, res, next) => {
        var authResult = {
            authorized: false,
            code: 401,
            reason: "Not authorized"
        };
        if (req.method === "POST") {
            authResult = await auth.insert(req.user, req.existingElement);
        } else if (req.method === "PUT") {
            authResult = await auth.replace(req.user, req.existingElement, req.body);
        } else if (req.method === "DELETE") {
            authResult = await auth.remove(req.user, req.existingElement);
        }
        if (!authResult.authorized) {
            res.status(authResult.code).send({
                message: authResult.reason
            });
        } else {
            next();
        }
    };
}

export function conflict () {
    return (req, res, next) => {
        if (req.method === "POST" && req.elementId && req.existingElement) {
            res.status(409).send({
                message: `Element with id ${req.elementId} already exists`
            });
        } else {
            next();
        }
    };
}

export function notFound () {
    return (req, res, next) => {
        if ((req.method === "PUT" || req.method === "DELETE") && !req.existingElement) {
            res.status(404).send({
                message: `No element found with id ${req.elementId}`
            });
        } else {
            next();
        }
    };
}
