export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "type": {
            "type": "string",
            "enum": ["survey", "questionnaire"]
        },
        "category": {
            "type": "string",
            "enum": ["demographics", "building", "heating", "cooling", "behavioral", "pilot"]
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
                    "options": {
                        "type": "array",
                        "items": {
                            "type": "string"
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
        }
    },
    "additionalProperties": false,
    "required": [
        "type",
        "category",
        "questions"
    ]
};
