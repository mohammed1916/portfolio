export const skillsschema = {
    "type": "array",
    "title": "Skills",
    "items": {
        "type": "object",
        "properties": {
            "type": {
                "type": "string",
                "description": "Please enter type of Skill"
            },
            "KnowledgeInAdvanceTopics": {
                "title": "Knowledge In Advance Topics",
                "type": "string",
            },
            "KnowledgeInMainConcepts": {
                "title": "Knowledge In Main Concepts",
                "type": "string",
            },
            "Beginner": {
                "type": "string",
            }
        },
        "required": [
            "type",
            "KnowledgeInAdvanceTopics",
            "KnowledgeInMainConcepts",
            "Beginner"
        ]
    }
}

export const skillsuischema = {
    "type": "Group",
    "elements": [
        {
            "type": "Control",
            "scope": "#/properties/skills",
            "options": {
                "elementLabelProp": "tyoe",
                "detail": {
                    "type": "VerticalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/type"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/KnowledgeInAdvanceTopics"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/KnowledgeInMainConcepts"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/Beginner"
                        }
                    ]
                }
            }
        }
    ]
}

export const skillsinitialdata = {
    "skills": [
        {
            "type": "Programming Languages",
            "KnowledgeInAdvanceTopics": "JAVA, C",
            "KnowledgeInMainConcepts": "python, python3, godot",
            "Beginner": "C++, javascript"
        }
        ,
        {
            "type": "Framworks And Libraries",
            "KnowledgeInAdvanceTopics": "Flutter",
            "KnowledgeInMainConcepts": "Reactjs",
            "Beginner": "Gatsby, Django"
        },
        {
            "type": "Tools and IDE's",
            "KnowledgeInAdvanceTopics": "Inkscape, VS code",
            "KnowledgeInMainConcepts": "Github, Godot Game Engine, Android Studio",
            "Beginner": "Gimp"
        }
    ]
}
export const originalskillsinitialdata = {
    "skills": [
        {
            "type": "",
            "KnowledgeInAdvanceTopics": "",
            "KnowledgeInMainConcepts": "",
            "Beginner": ""
        }
    ]
}