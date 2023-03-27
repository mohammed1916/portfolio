export const projectsschema = {
    "type": "array",
    "title": "Projects",
    "items": {
        "type": "object",
        "properties": {
            "title": {
                "type": "string",
                "description": "Please enter title for this project"
            },
            "dates": {
                "type": "string",
                "description": "Duration of Project"
            },
            "type": {
                "title": "Domain of Project",
                "type": "string",
            },
            "thumbnail": {
                "title": "Thumbnail",
                "type": "string",
            },
            "link": {
                "type": "string",
            },
            "gitlink": {
                "type": "string",
            },
            "description": {
                "type": "string",
            },
            "gallery": {
                "type": "array",
            },
        },
        "required": [
            "title",
            "type",
            "thumbnail",
            "link",
            "gitlink",
            "description",
            "gallery"
        ]
    }
}

export const projectsuischema = {
    "type": "Group",
    "elements": [
        {
            "type": "Control",
            "scope": "#/properties/projects",
            "options": {
                "elementLabelProp": "title",
                "detail": {
                    "type": "VerticalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/title"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/dates"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/type"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/thumbnail"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/link"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/gitlink"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/description"
                        },
                    ]
                }
            }
        }
    ]
}

export const projectsinitialdata = {
    "projects": [
        {
            "title": "Memory Game",
            "type": "Android",
            "thumbnail": require('../../Components/Projects/Images/0/3.jpeg'),
            "link": "https://play.google.com/store/apps/details?id=org.greenelite.memorize",
            "gitlink": "https://github.com/mohammed1916/Memorize#readme",
            "description": "Train yourself to memorize and remember by matching color pairs.",
        },
        {
            "title": "Portfolio",
            "type": "Website",
            "thumbnail": require('../../Components/Projects/Images/1/1.jpeg'),
            "link": "https://mohammedabdullah.pages.dev",
            "gitlink": "https://github.com/mohammed1916/portfolio#readme",
            "description": "Made a portfolio template using reactjs library.",
        }
    ]
}
export const originalprojectsinitialdata = {
    "projects": [
        {
            "title": "",
            "dates": "",
            "type": "",
            "thumbnail": '',
            "link": "",
            "gitlink": "",
            "description": "",
        },
    ]
}
