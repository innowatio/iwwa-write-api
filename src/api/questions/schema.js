export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "question": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "text": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                },
                "category": {
                    "type": "string"
                },
                "options": {
                    "type": "array",
                    "items": {
                        "oneOf": [
                            {"type": "string"},
                            {"type": "number"}
                        ]
                    },
                    "uniqueItems": true
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "text",
                "type"
            ]
        }
    },
    "type": "object",
    "properties": {
        "type": {
            "type": "string",
            "enum": ["survey", "questionnaire"]
        },
        "category": {
            "type": "string",
            "enum": ["demographics", "building", "heating", "cooling", "behavioural", "pilot"]
        },
        "categoryNumber": {
            "type": "number"
        },
        "title": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "start": {
            "type": "string",
            "format": "date-time"
        },
        "end": {
            "type": "string",
            "format": "date-time"
        },
        "questions": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/question"
            }
        }
    },
    "additionalProperties": false,
    "required": [
        "type",
        "category",
        "questions"
    ]
};
