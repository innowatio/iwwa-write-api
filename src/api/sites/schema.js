export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "children": {
            "type": "array",
            "uniqueItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "children": {
                        "$ref": "#/definitions/children"
                    }
                },
                "required": ["id"]
            }
        },
        "attributes": {
            "type": "array",
            "uniqueItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "value": {
                        "type": "string"
                    }
                },
                "required": ["id"]
            }
        }
    },
    "type": "object",
    "properties": {
        "id": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "shortDescription": {
            "type": "string"
        },
        "employees": {
            "type": "string"
        },
        "businessType": {
            "type": "string"
        },
        "contractualPower": {
            "type": "number"
        },
        "areaInMq": {
            "type": "string"
        },
        "country": {
            "type": "string"
        },
        "province": {
            "type": "string"
        },
        "address": {
            "type": "string"
        },
        "city": {
            "type": "string"
        },
        "defaultSensor": {
            "type": "string"
        },
        "sensors": {
            "$ref": "#/definitions/children"
        },
        "attributes": {
            "$ref": "#/definitions/attributes"
        },
        "alarmsDisabled": {
            "type": "boolean"
        },
        "connectionDisabled": {
            "type": "boolean"
        },
        "consumptionsDisabled": {
            "type": "boolean"
        },
        "telecontrolDisabled": {
            "type": "boolean"
        },
        "comfortDisabled": {
            "type": "boolean"
        },
        "hourlyData": {
            "type": "boolean"
        }
    },
    "additionalProperties": false,
    "required": [
        "id",
        "name"
    ]
};
