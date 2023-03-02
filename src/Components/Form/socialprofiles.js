export const socialprofilesschema = {
    "type": "object",
    "properties": {
        "profiles": {
            "type": "array",
            "title": "Social Media Profiles",
            "items": {
                "title": "media",
                "type": "object",
                "properties": {
                    "media": {
                        "type": "string",
                        "description": "Please enter Social Media Site"
                    },
                    "url": {
                        "type": "string",
                        "description": "Please enter Social Media Site URL"
                    },
                    "icon": {
                        "type": "string",
                        "description": "Please enter Social Media Site icon",
                        "enum": ["../../img/icons/media/github.png", "../../img/icons/media/linkedin.png", "../../img/icons/media/facebook.png", "../../img/icons/media/instagram.png", "../../img/icons/media/post-outline.png", "../../img/icons/media/twitter.png"]
                    }
                }
            }

        }
    },
    "required": [
        "media",
        "url",
        "icon",
    ]
}

export const socialprofilesuischema = {
    "type": "Group",
    "elements": [
        {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/properties/profiles",
                    "options": {
                        "label": "#/properties/media",
                        "detail": {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/media"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/url"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/icon"
                                }
                            ]
                        }
                    }
                }
            ]
        }
    ]
}

export const socialprofilesinitialdata = {
    "profiles": [
        {
            "media": "Github",
            "url": "https://github.com/mohammed1916/",
            "icon": "../../img/icons/media/github.png"
        },
        {
            "media": "Linkedin",
            "url": "https://www.linkedin.com/in/mohammed-abdullah-a103311a6/",
            "icon": "../../img/icons/media/linkedin.png"
        },
        {
            "media": "Blogs",
            "url": "https://comprehendingknowledge.blogspot.com/",
            "icon": "../../img/icons/media/post-outline.png"
        }
    ]
};
export const originalsocialprofilesinitialdata = {
    "profiles": [
        {
            "media": "Linkedin",
            "url": "https://www.linkedin.com/in/",
            "icon": "../../img/icons/media/linkedin.png"
        },
    ]
};
