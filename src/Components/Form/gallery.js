export const galleryschema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "0": {
                "title": "Sample Image 1",
                "type": "string",
                "description": "Please enter link to the image"
            },
            "1": {
                "title": "Sample Image 2",
                "type": "string",
            },
            "2": {
                "title": "Sample Image 3",
                "type": "string",
            }
        },
        "required": [
            "0",
            "1",
            "2"
        ]
    }
}

export const galleryuischema = {
    "type": "Group",
    "elements": [
        {
            "type": "Control",
            "scope": "#/properties/gallery",
            "label": "Project Screenshots (One Project per row)",
            "options": {
                "detail": {
                    "type": "VerticalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/0"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/1"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/2"
                        }
                    ]
                }
            }
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
export const originalgalleryinitialdata = {
    "gallery": [
        {
            "0": '',
            "1": '',
            "2": ''
        },
    ]
}
