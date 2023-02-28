export const certificatesschema = {
    "type": "array",
    "title": "certificates",
    "items": {
        "type": "object",
        "properties": {
            "title": {
                "type": "string",
                "description": "Please enter title of the certificate"
            },
            "date": {
                "type": "string",
                "description": "Please enter date of issue of the certificate"
            },
            "institution": {
                "type": "string",
                "description": "Please enter certificate provider"
            },
            "thumbnail": {
                "type": "string",
                "description": "Please enter thumbnail URL"
            },
            "description": {
                "type": "string",
                "description": "Please enter description of the certificate"
            }
        }
    },
    "required": [
        "title",
        "date",
        "institution",
        "thumbnail",
        "description",
    ]
}

export const certificatesuischema = {
    "type": "Group",
    "elements": [
        {
            "type": "Control",
            "scope": "#/properties/certificates",
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
                            "scope": "#/properties/date"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/institution"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/thumbnail"
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

export const certificatesinitialdata = {
    "certificates": [
        {
            "title": "Kotlin For Java Developers",
            "date": "July 22, 2021",
            "institution": "Coursera",
            "thumbnail": require('../../Components/Certifications/Images/Kotlin For Java Developers.png'),
            "description": "Learned concepts of Nullability, Functional Programming, Properties, OOP, Conventions in Kotin"
        },
        {
            "title": "Machine Learning Piplines with Azure ML Studio",
            "date": "July 19, 2021",
            "institution": "Coursera",
            "thumbnail": require('../../Components/Certifications/Images/Course~Coursera~Machine Learning Piplines with Azure ML Studio.jpg'),
            "description": "Got a chance to learn topics of Data Cleaning, Accounting for Class Imbalance, Training a Two-Class Boosted Decision Tree Model and Hyperparameter Tuning, Scoring and Evaluating the Models, Publishing the Trained Model as a Web Service for Inference"
        },
        {
            "title": "Git and Github For Biginners",
            "date": "Sept 10, 2021",
            "institution": "Udemy",
            "thumbnail": require('../../Components/Certifications/Images/Course~Udemy~Git and Github For Biginners.jpeg'),
            "description": "Learned about version control systems, git commands, branches and performed pushing projects through git"
        },
        {
            "title": "Deep Learning",
            "date": "July - Oct, 2021",
            "institution": "NPTEL",
            "thumbnail": require('../../Components/Certifications/Images/Course~NPTEL~Deep Learning.jpg'),
            "description": "Here is comprehensive timeline of course:\nWeek 1: History of Deep Learning, Deep Learning Success Stories, McCulloch Pitts Neuron \nWeek 2: Multilayer Perceptrons (MLPs), Representation Power of MLPs, Sigmoid Neurons, Gradient Descent\nWeek 3: Feed Forward Neural Networks, Back propagation\nWeek 4: Gradient Descent (GD), Momentum Based GD, Nesterov Accelerated GD, Stochastic GD\nWeek 5: Principal Component Analysis and its interpretations, Singular Value Decomposition\nWeek 6: Auto encoders and relation to PCA Regularization in auto encoders, Denoising auto encoders, Sparse auto encoders\nWeek 7: Regularization: Bias Variance Tradeoff, L2 regularization Early stopping, Dataset augmentation\nWeek 8: Greedy Layerwise Pre-training, Better activation functions, Better weight initialization methods, Batch Normalization\nWeek 9: Learning Vectorial Representations Of Words\nWeek 10: Convolutional Neural Networks, LeNet, AlexNet, ZF-Net, VGGNet, GoogLeNet, ResNet\nWeek 11: Recurrent Neural Networks, Back propagation through time (BPTT), Vanishing and Exploding Gradients, Truncated BPTT, GRU, LSTMs\nWeek 12: Encoder Decoder Models, Attention Mechanism, Attention over images"
        },
        {
            "title": "Building Transformer-Based Natural Language Processing Applications",
            "date": "March 11, 2022",
            "institution": "NVIDIA",
            "thumbnail": require('../../Components/Certifications/Images/Course~NVIDIA~Building Transformer-Based Natural Language Processing Applications.jpg'),
            "description": "I explored how the Transformer architecture works in detail and Learned how to apply self-supervised Transformer-based models to concrete NLP tasks using NVIDIA NeMo and finally deployed an NLP project for live inference on NVIDIA Triton"
        },
        {
            "title": "Fundamentals of Deep Learning",
            "date": "March 10, 2022",
            "institution": "NVIDIA",
            "thumbnail": require('../../Components/Certifications/Images/Course~NVIDIA~Fundamentals of Deep Learning.jpg'),
            "description": "Learned to apply data augmentation to enhance a dataset and improve model generalization and also studied Pre-trained Models and Recurrent Networks and finally executed a project based on Object Classification"
        }
    ]
}
export const originalcertificatesinitialdata = {
    "certificates": [
        {
            "title": "",
            "date": "",
            "institution": "",
            "thumbnail": '',
            "description": ""
        },
    ]
}
