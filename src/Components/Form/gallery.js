export const galleryschema = {
    "type": "object",
    "properties": {
        "gallery": {
            "title": "Projects Sample Photos",
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "0": {
                        "title": "Sample Image 1",
                        "type": "string",
                    },
                    "1": {
                        "title": "Sample Image 2",
                        "type": "string",
                    },
                    "2": {
                        "title": "Sample Image 3",
                        "type": "string",
                    }
                }
            }
        }
    },
    "required": [
        "gallery",
    ]
}

export const galleryuischema = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "Control",
            "scope": "#/properties/gallery"
        }
    ]
}

export const galleryinitialdata = {
    "gallery": [
        {
            "0": require('../../Components/Projects/Images/0/1.jpeg'),
            "1": require('../../Components/Projects/Images/0/2.jpeg'),
            "2": require('../../Components/Projects/Images/0/3.jpeg')
        },
        {
            "0": require('../../Components/Projects/Images/1/1.jpeg'),
            "1": require('../../Components/Projects/Images/1/2.jpeg'),
            "2": require('../../Components/Projects/Images/1/3.jpeg')
        },
    ]
}
