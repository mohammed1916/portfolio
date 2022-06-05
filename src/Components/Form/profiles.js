export const schema = {
    "type": "object",
    "profiles": {
        "media": {
            "type": "string",
            "description": "Please enter a social media site."
        },
        "url": {
            "type": "string",
            "description": "Please enter the link to social media site."
        },
        "icon": {
            "type": "string",
        }
    },

}

export const uischema = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "Label",
            "text": "Personal Data",
        },
        {
            "type": "Control",
            "scope": "#/properties/name"
        },
        {
            "type": "Control",
            "scope": "#/properties/personalData/properties/age"
        },
        {
            "type": "Control",
            "scope": "#/properties/birthDate"
        },

        {
            "type": "Label",
            "text": "Additional Information"
        },
        {
            "type": "Control",
            "scope": "#/properties/personalData/properties/height"
        },
        {
            "type": "Control",
            "scope": "#/properties/nationality"
        },
        {
            "type": "Control",
            "scope": "#/properties/occupation",
            "suggestion": [
                "Accountant",
                "Engineer",
                "Freelancer",
                "Journalism",
                "Physician",
                "Student",
                "Teacher",
                "Other"
            ]
        }

    ]
}

export const initialdata = {
    "name": "Mohammed Abdullah",
    "domain": "Front End and Mobile Application Developer",
    "image": require('./img/Design/design.png'),
    "email": "curiousabdullah@gmail.com",
    "whoami": "I am Mohammed Abdullah. An aspiring front end developer who likes to learn explore new front end frameworks.",
    "description": "Currently I am pursuing my bachelor's degree in Computer Science and Engineering. I love creating user-centric applications. I have explored the domain of mobile application development and created apps for native android and also a hybrid mobile application using flutter. I have also worked with Godot engine, using which I designed a memory game for android.",
    "location": "Chennai",
    "profiles": [
        {
            "media": "Github",
            "url": "https://github.com/mohammed1916/",
            "icon": require('./img/icons/media/github.png')
        },
        {
            "media": "Linkedin",
            "url": "https://www.linkedin.com/in/mohammed-abdullah-a103311a6/",
            "icon": require('./img/icons/media/linkedin.png')
        },
        {
            "media": "Blogs",
            "url": "https://comprehendingknowledge.blogspot.com/",
            "icon": require('./img/icons/media/post-outline.png')
        }
    ]
}