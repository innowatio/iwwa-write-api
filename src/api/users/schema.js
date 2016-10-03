export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "uid": {
            "type": "string"
        },
        "sites": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "minItems": 1,
            "uniqueItems": true
        },
        "sensors": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "uniqueItems": true
        },
        "roles": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "minItems": 1,
            "uniqueItems": true
        },
        "groups": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "uniqueItems": true
        },
        "profile":{
            "type": "object",
            "properties": {
                "active": {
                    "type": "boolean"
                },
                "confirmed": {
                    "type": "boolean"
                },
                "isDeleted": {
                    "type": "boolean"
                },
                "parentUserId": {
                    "type": "string"
                }
            }
        }
    },
    "additionalProperties": false,
    "required": [
        "uid"
    ]
};
