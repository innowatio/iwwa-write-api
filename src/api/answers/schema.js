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
                    "type": "string"
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "timestamp",
                "answer"
            ]
        },
        "question": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "text": {
                    "type": "string"
                }
            },
            "additionalProperties": false,
            "required": [
                "id",
                "text"
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
            "enum": ["demographics", "building", "heating", "cooling", "behavioral", "initialPilot", "endingPilot"]
        },
        "userId": {
            "type": "string"
        },
        "siteId": {
            "type": "string"
        },
        "answers": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/answer"
            }
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
        "userId",
        "answers",
        "questions"
    ]
};
