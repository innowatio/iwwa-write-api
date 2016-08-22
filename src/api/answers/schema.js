export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "answer": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "timestamp": {
                    "type": "string",
                    "format": "date-time"
                },
                "answer": {
                    "oneOf": [
                        {"type": "string"},
                        {"type": "number"}
                    ]
                },
                "question": {
                    "type": "object",
                    "properties": {
                        "text": {
                            "type": "string"
                        },
                        "category": {
                            "type": "string"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "text"
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "timestamp",
                "answer",
                "question"
            ]
        }
    },
    "type": "object",
    "properties": {
        "questionId": {
            "type": "string"
        },
        "type": {
            "type": "string",
            "enum": ["survey", "questionnaire"]
        },
        "category": {
            "type": "string",
            "enum": ["demographics", "building", "heating", "cooling", "behavioral", "pilot"]
        },
        "userId": {
            "type": "string"
        },
        "siteId": {
            "type": "string"
        },
        "visitId": {
            "type": "string"
        },
        "answers": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/answer"
            }
        }
    },
    "additionalProperties": false,
    "required": [
        "questionId",
        "type",
        "category",
        "userId",
        "answers"
    ]
};
