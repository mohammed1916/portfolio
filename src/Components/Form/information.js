export const informationschema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "minLength": 3,
            "description": "Please enter your name"
        },
        "domain": {
            "type": "string",
            "description": "Please enter your career objective"
        },
        "image": {
            "type": "string",
            "description": "Please enter a link to google photos"
        },
        "email": {
            "type": "string"
        },
        "whoami": {
            "title": "Short Description",
            "type": "string",
            "description": "Please enter short description about yourself"
        },
        "description": {
            "type": "string",
            "options": {
                "multi": true
            }
        },
        "location": {
            "type": "string",
            "description": "Please enter city name"
        }
    },
    "required": [
        "name",
        "domain",
        "whoami",
        "description",
        "email",
        "location"
    ]
}

export const informationuischema = {
    "type": "Group",
    "elements": [
        {
            "type": "Label",
            "text": "Personal Data"
        },
        {
            "type": "Control",
            "scope": "#/properties/name"
        },
        {
            "type": "Control",
            "scope": "#/properties/domain"
        },
        {
            "type": "Control",
            "scope": "#/properties/image"
        },
        {
            "type": "Control",
            "scope": "#/properties/email"
        },
        {
            "type": "Control",
            "scope": "#/properties/whoami"
        },
        {
            "type": "Control",
            "scope": "#/properties/description"
        },
        {
            "type": "Control",
            "scope": "#/properties/location"
        },
    ]
}

export const informationinitialdata = {
    "name": "Mohammed Abdullah",
    "domain": "Front End and Mobile Application Developer",
    "image": "https://lh3.googleusercontent.com/zKBJCdMsOnBuLrT8lht-_sED6IgCwjI6vEV3rMB_MhTOAuhKnoGP0vwE7HXt0f1u5e2LNmCmyYz5mUiFleRY7SIhKldKHeVR47mfviGKzkgipGgyV9s4aT8NZ7pIGk6GMt2FqeU=w300-h282-p-k",
    "email": "developer9902@gmail.com",
    "whoami": "I am Mohammed Abdullah. An aspiring front end developer who likes to learn explore new front end frameworks.",
    "description": "Currently I am pursuing my bachelor's degree in Computer Science and Engineering. I love creating user-centric applications. I have explored the domain of mobile application development and created apps for native android and also a hybrid mobile application using flutter. I have also worked with Godot engine, using which I designed a memory game for android.",
    "location": "Chennai",
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
export const originalinformationinitialdata = {
    "name": "Full Name",
    "domain": "",
    "image": "",
    "email": "",
    "whoami": "",
    "description": "",
    "location": "",
    "profiles": [
        {
            "media": "Linkedin",
            "url": "https://www.linkedin.com/in/",
            "icon": "../../img/icons/media/linkedin.png"
        },
    ]
};
