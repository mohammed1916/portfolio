export const workschema = {
    "type": "array",
    "title": "work",
    "items": {
        "type": "object",
        "properties": {
            "company": {
                "type": "string",
            },
            "location": {
                "type": "string",
            },
            "title": {
                "title": "Title",
                "type": "string",
            },
            "thumbnail": {
                "type": "string",
            },
            "dates": {
                "type": "string",
            },
            "description": {
                "type": "string",
            }
        }
    },
    "required": [
        "company",
        "location",
        "title",
        "thumbnail",
        "dates",
        "description",
    ]
}

export const workuischema = {
    "type": "Group",
    "elements": [
        {
            "type": "Control",
            "scope": "#/properties/work",
            "options": {
                "elementLabelProp": "Type",
                "detail": {
                    "type": "VerticalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/company"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/location"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/title"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/thumbnail"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/dates"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/description"
                        }
                    ]
                }
            }
        },]
}

export const workinitialdata = {
    "work": [
        {
            "company": "The Sparks Foundation",
            "location": "Online/ Work from Home",
            "title": "Intern",
            "thumbnail": require('../../Components/Certifications/Images/Internship~The Sparks Foundation~Hybrid Mobile App.png'),
            "dates": "Sept - Oct 2021",
            "description": "Worked on creating a Hybrid Mobile App using Flutter.\nCreated several models in databse.\nPerformed CRUD oprations"
        }
    ]
}
export const originalworkinitialdata = {
    "work": [
        {
            "company": "",
            "location": "",
            "title": "",
            "thumbnail": "",
            "dates": "",
            "description": ""
        }
    ]
}
