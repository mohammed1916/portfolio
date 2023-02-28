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
                            "scope": "#/properties/description"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/gallery"
                        }
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
            "description": "Train yourself to memorize and remember by matching color pairs.",
            "gallery": [
                require('../../Components/Projects/Images/0/1.jpeg'),
                require('../../Components/Projects/Images/0/2.jpeg'),
                require('../../Components/Projects/Images/0/3.jpeg')
            ]
        },
        {
            "title": "Portfolio",
            "type": "Website",
            "thumbnail": require('../../Components/Projects/Images/1/1.jpeg'),
            "link": "https://mohammedabdullah.pages.dev",
            "description": "Made a portfolio template using reactjs library.",
            "gallery": [
                require('../../Components/Projects/Images/1/1.jpeg'),
                require('../../Components/Projects/Images/1/2.jpeg'),
                require('../../Components/Projects/Images/1/3.jpeg')

            ]
        }
    ]
}
export const originalprojectsinitialdata = {
    "projects": [
        {
            "title": "",
            "type": "",
            "thumbnail": '',
            "link": "",
            "description": "",
            "gallery": [
                '',
                '',
                ''
            ]
        },
    ]
}
