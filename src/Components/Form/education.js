export const educationschema = {
    "type": "array",
    "title": "education",
    "items": {
        "type": "object",
        "properties": {
            "Institution": {
                "type": "string",
                "description": "Please enter name of Institution"
            },
            "Program": {
                "type": "string",
                "description": "Please enter program"
            },
            "YearOfPassing": {
                "title": "Year of Passing",
                "type": "string",
                "description": "Please enter year of passing"
            },
            "Grade": {
                "type": "string",
                "description": "Please enter grade obtained"
            },
            "website": {
                "type": "string",
                "description": "Please enter URL of website"
            }
        }
    },
    "required": [
        "Institution",
        "Program",
        "YearOfPassing",
        "Grade",
        "website",
    ]
}

export const educationuischema = {
    "type": "Group",
    "elements": [
        {
            "type": "Control",
            "scope": "#/properties/education",
            "options": {
                "elementLabelProp": "Type",
                "detail": {
                    "type": "VerticalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/Institution"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/Program"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/YearOfPassing"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/Grade"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/website"
                        }
                    ]
                }
            }
        },]
}

export const educationinitialdata = {
    "education": [
        {
            "Institution": "Unity Public School, Chennai",
            "Program": "10th Standard",
            "YearOfPassing": "2017",
            "Grade": "10 C.G.P.A",
            "website": "http://www.unitypublicschool.com/"
        },
        {
            "Institution": "Unity Public School, Chennai",
            "Program": "12th Standard",
            "YearOfPassing": "2019",
            "Grade": "87.3%",
            "website": "http://www.unitypublicschool.com/"
        },
        {
            "Institution": "Panimalar Engineering College, Chennai",
            "Program": "Undergraduate - Computer Science and Engineering",
            "YearOfPassing": "2023",
            "Grade": "9.48 C.G.P.A",
            "website": "https://panimalar.ac.in/"
        }
    ]
}
export const originaleducationinitialdata = {
    "education": [
        {
            "Institution": "",
            "Program": "",
            "YearOfPassing": "",
            "Grade": "",
            "website": ""
        }
    ]
}
