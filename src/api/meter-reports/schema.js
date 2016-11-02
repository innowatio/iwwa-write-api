export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "meter_code": {
            "type": "string"
        },
        "start_date": {
            "type": "string",
            "format": "date-time"
        },
        "end_date": {
            "type": "string",
            "format": "date-time"
        },
        "total_consumption": {
            "type": "number"
        },
        "peer_average_daily_consumption": {
            "type": "number"
        },
        "peer_average_daily_consumption_non_working": {
            "type": "number"
        },
        "peer_consumption": {
            "type": "number"
        },
        "peer_consumption_difference": {
            "type": "number"
        },
        "savings": {
            "type": "number"
        },
        "peer_savings": {
            "type": "number"
        },
        "peer_savings_difference": {
            "type": "number"
        },
        "savings_goal": {
            "type": "number"
        },
        "peak_consumption_savings": {
            "type": "number"
        },
        "peer_peak_consumption_savings": {
            "type": "number"
        },
        "peer_peak_consumption_savings_difference": {
            "type": "number"
        },
        "peak_consumption_savings_goal": {
            "type": "number"
        },
        "average_daily_visits": {
            "type": "number"
        },
        "peer_average_daily_visits": {
            "type": "number"
        },
        "peer_average_daily_visits_difference": {
            "type": "number"
        },
        "average_daily_visits_goal": {
            "type": "number"
        },
        "typical_day": {
            "type": "object"
        },
        "typical_day_non_working": {
            "type": "object"
        },
        "peak_hours": {
            "type": "array",
            "items": {
                "type": "array"
            }
        },
        "peak_hours_non_working": {
            "type": "array",
            "items": {
                "type": "array"
            }
        },
        "stand_by_consumption": {
            "type": "number"
        },
        "stand_by_consumption_non_working": {
            "type": "number"
        },
        "average_daily_consumption": {
            "type": "number"
        },
        "average_daily_consumption_non_working": {
            "type": "number"
        },
        "times_exceeded_contracted_power": {
            "type": "number"
        },
        "times_exceeded_contracted_power_non_working": {
            "type": "number"
        },
        "typical_week": {
            "type": "object"
        },
        "forecasted_consumption": {
            "type": "number"
        },
        "tips_added": {
            "type": "number"
        },
        "total_app_visits": {
            "type": "number"
        },
        "alerts_happened": {
            "type": "number"
        },
        "profile_completion": {
            "type": "number"
        }
    },
    "additionalProperties": false,
    "required": [
        "meter_code",
        "start_date",
        "end_date"
    ]
};
