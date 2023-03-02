export const linkedinschema = {
    "type": "object",
    "properties": {
        "linkedin": {
            "type": "string",
            "minLength": 3,
            "description": "Please enter your Linkedin Profile link"
        },
    }
}

export const linkedinuischema = {
    "type": "Group",
    "elements": [
        {
            "type": "Label",
            "text": "Linkedin Link"
        },
        {
            "type": "Control",
            "scope": "#/properties/linkedin",
            "label": "URL"
        },
    ]
}

export const linkedininitialdata = {
    "linkedin": "https://www.linkedin.com/in/curious-mohammed-abdullah/",
};
export const originallinkedininitialdata = {
    "linkedin": "",
};
