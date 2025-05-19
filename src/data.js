export const data = {
    "information": {
        "name": "Mohammed Abdullah",
        "image": require('./img/Design/design.png'),
        "email": "developermohammed01@gmail.com",
        "whoami": "I am Mohammed Abdullah. An aspiring software developer who likes to learn and explore new frameworks.",
        "description": "Currently I am pursuing my PG in M.Tech IT (Spln. in AI & DS). I love creating user-centric applications. I have developed websites using NextJS. Apart from it, I have also explored the domain of mobile application development and created apps for native android and also a hybrid mobile application using flutter. I have also worked with Godot engine, using which I designed a memory game for android.",
        "location": "Chennai",
        "profiles": [
            {
                "media": "Github",
                "url": "https://github.com/mohammed1916/",
                "icon": require('./img/icons/media/github.png')
            },
            {
                "media": "Linkedin",
                "url": "https://www.linkedin.com/in/curious-mohammed-abdullah/",
                "icon": require('./img/icons/media/linkedin.png')
            },
            {
                "media": "Blogs",
                "url": "https://medium.com/@curiousabdullah",
                "icon": require('./img/icons/media/post-outline.png')
            }
        ]
    },
    "education": [
        {
            "Institution": "Unity Public School, Chennai",
            "Type": "10th Standard",
            "Year of Passing": "2017",
            "Grade": "10 C.G.P.A",
            "website": "http://www.unitypublicschool.com/"
        },
        {
            "Institution": "Unity Public School, Chennai",
            "Type": "12th Standard",
            "Year of Passing": "2019",
            "Grade": "87.3%",
            "website": "http://www.unitypublicschool.com/"
        },
        {
            "Institution": "Panimalar Engineering College, Chennai",
            "Type": "Undergraduate - B.E Computer Science and Engineering",
            "Year of Passing": "2023",
            "Grade": "9.51 C.G.P.A",
            "website": "https://panimalar.ac.in/"
        },
        {
            "Institution": "Anna University, Chennai",
            "Type": "Post graduate - M.Tech IT (Spln. in AI & DS)",
            "Year of Passing": "2025",
            "Grade": "",
            "website": "https://www.annauniv.edu/"
        }
    ],
    "work": [
        {
            "company": "The Sparks Foundation",
            "location": "Online/ Work from Home",
            "title": "Intern",
            "thumbnail": require('./Components/Certifications/Images/Internship~The Sparks Foundation~Hybrid Mobile App.png'),
            "dates": "Sept - Oct 2021",
            "description": "Worked on creating a Hybrid Mobile App using Flutter.\nCreated several models in database.\nPerformed CRUD operations"
        }
    ],
    "skills": [
        {
            "type": "Programming Languages",
            "Knowledge in Advance Topics": "Javascript, Python, C",
            "Knowledge in Main Concepts": "Java",
            "Beginner": "C++, GDScript"
        }
        ,
        {
            "type": "Frameworks And Libraries",
            "Knowledge in Advance Topics": "ReactJs, NextJS 13",
            "Knowledge in Main Concepts": "Flutter",
            "Beginner": "Flask",
        },
        {
            "type": "Tools and IDE's",
            "Knowledge in Advance Topics": "Inkscape, VS code",
            "Knowledge in Main Concepts": "Git VCS, Godot Game Engine, Android Studio",
            "Beginner": "Gimp",
        }
    ]
    ,
    "projects": [
        {
            "title": "Memory Game",
            "type": "Android",
            "thumbnail": require('./Components/Projects/Images/1/3.jpeg'),
            // "link": "https://play.google.com/store/apps/details?id=org.greenelite.memorize",
            "link": "https://github.com/mohammed1916/Memorize",
            "description": "Train yourself to memorize and remember by matching color pairs.",
            "gallery": [
                {
                    original: require('./Components/Projects/Images/1/1.jpeg'),
                    thumbnail: require('./Components/Projects/Images/1/1.jpeg'),
                },
                {
                    original: require('./Components/Projects/Images/1/2.jpeg'),
                    thumbnail: require('./Components/Projects/Images/1/2.jpeg'),
                },
                {
                    original: require('./Components/Projects/Images/1/3.jpeg'),
                    thumbnail: require('./Components/Projects/Images/1/3.jpeg'),
                },
            ]
        },
        {
            "title": "Portfolio",
            "type": "Website",
            "thumbnail": require('./Components/Projects/Images/2/1.jpeg'),
            "link": "https://mohammedabdullah.pages.dev/",
            "description": "Made a portfolio template using ReactJs library.",
            "gallery": [
                {
                    original: require('./Components/Projects/Images/2/1.jpeg'),
                    thumbnail: require('./Components/Projects/Images/2/1.jpeg'),
                },
                {
                    original: require('./Components/Projects/Images/2/2.jpeg'),
                    thumbnail: require('./Components/Projects/Images/2/2.jpeg'),
                },
                {
                    original: require('./Components/Projects/Images/2/3.jpeg'),
                    thumbnail: require('./Components/Projects/Images/2/3.jpeg'),
                },
            ]
        },
        {
            "title": "Dynamic Portfolio generator",
            "type": "Single Page Web App",
            "thumbnail": require('./Components/Projects/Images/2/1.jpeg'),
            "link": " https://mohammedabdullahportfolio.web.app/",
            "description": `Employed REST API's to perform 3-legged authentication for linkedIn.
            Scraped data from LinkedIn and Github using Puppeteer.
            Used socket programming to send the scrapped data between middleware server and client. Project can be found at https://github.com/mohammed1916/portfolio/tree/FirebaseWebsite`,
            "gallery": [
                {
                    original: require('./Components/Projects/Images/2/1.jpeg'),
                    thumbnail: require('./Components/Projects/Images/2/1.jpeg'),
                },
                {
                    original: require('./Components/Projects/Images/2/2.jpeg'),
                    thumbnail: require('./Components/Projects/Images/2/2.jpeg'),
                },
                {
                    original: require('./Components/Projects/Images/2/3.jpeg'),
                    thumbnail: require('./Components/Projects/Images/2/3.jpeg'),
                },
            ]
        },
    ],
    "certifications": [
        {
            "title": "Project on A Novel Method for Handwritten Digit Recognition System",
            "date": "February 20, 2023",
            "Institution": "IBM Developer Skills Network",
            "thumbnail": require('./Components/Certifications/Images/Course~IBM~HandwrittenDigitRecognition.png'),
            "description": `The project can be found at: https://github.com/mohammed1916/IBM-Project-3542-1658575041/tree/main/Final%20Deliverables
            
            DESCRIPTION: 
            Language: Python
            Framework: Flask
            Libraries: tensorflow, numpy, matplotlib, sklearn
            
            Worked in a team with Agile SDLC to design, create, train, and test an ML model.
            
            Note: The project was submitted as part of the Nalaiya Thiran programme partnered with IBM. Credentials: https://courses.ictacademy.skillsnetwork.site/certificates/98dcd21d a1ee4de49b07df44df0da0d0 
            
            FEATURES: Deployed ML model using Flask App which could be tunnelled to an external URL using Ngrok to execute the program in Google Colab.
            
            MODEL:
            The ML model was created by importing MNIST data set and reshaping the images, which were divided into training and testing datasets.
            This was then passed through a CNN with 2D convolution layer with ReLU as its activation function to combat vanishing gradients, and then downsampled using MaxPooling layer followed by a flatten and two dense layers and finally compiled using SGD optimizer and categorical cross entropy loss function.
            This was exported in h5 format and saved in the static folder of the flask application.
            
            FLASK APPLICATION:
            The model was loaded into the Flask application by importing the exported model. This was then used to determine the digit from the uploaded image, as recognized by the model and to calculate the accuracy.
            The root '/' during GET renders the index.html file present in the templates folder. When a POST request is made after determining the digit, the power of jinja statements is utilised in dynamic rerendering of the html page.
            During this process the request library is used to obtain the uploaded image.
            
            
            TESTING: load testing was performed using locust for POST where multiple locust Tasks were created in which the HttpSession client uploaded test images to validate for HTTP 400 OK response.
            `
        },
        {
            "title": "Kotlin For Java Developers",
            "date": "July 22, 2021",
            "Institution": "Coursera",
            "thumbnail": require('./Components/Certifications/Images/Course~Coursera~Kotlin For Java Developers.jpg'),
            "description": "Learned concepts of Nullability, Functional Programming, Properties, OOP, Conventions in Kotin"
        },
        {
            "title": "Fundamentals of Accelerated Computing with CUDA C/C++",
            "date": "October 20, 2024 - expires on March 16, 2026",
            "Institution": "Nvidia",
            "thumbnail": require('./Components/Certifications/Images/Course~Nvidia~C++Cuda.png'),
            "description": "Obtained Certificate of Competency for CUDA C/C++ \n Credential: https://learn.nvidia.com/certificates?id=p837-4HkR1mmR-5G-QROOA \nI gained a solid foundation in GPU programming using CUDA. The course began with an introduction and setup, where I registered on the NVIDIA platform to access course materials. I then learned the essential CUDA syntax and concepts required to write, compile, and run GPU-enabled C/C++ applications. This included understanding thread hierarchies, and how to allocate and manage GPU memory. \n Further, I explored memory management techniques using CUDA-managed (unified) memory. I learned to profile CUDA applications using the command-line profiler and gained insights into optimizing memory behavior based on profiling results. The course also covered asynchronous execution with CUDA streams and how to use NVIDIA Nsight Systems for visual profiling, which helped me identify opportunities for overlapping data transfers and computation. \n Finally, I reviewed all key learnings and completed an assessment to earn a certificate. This course significantly strengthened my ability to develop and optimize GPU-accelerated applications using CUDA C/C++."
        },
        {
            "title": "Fundamentals of Accelerated Computing with CUDA Python",
            "date": "October 23, 2024",
            "Institution": "Nvidia",
            "thumbnail": require('./Components/Certifications/Images/Course~Nvidia~PythonCuda.png'),
            "description": "Obtained Certificate of Competency for CUDA C/C++ \n Credential: https://learn.nvidia.com/certificates?id=fV0VTTEgRMqkL7nJ4oDgSQ \nThe course began with a brief introduction and setup via the NVIDIA Learning platform. I was then introduced to the Numba compiler and learned how to use Numba decorators to GPU-accelerate numerical Python functions. Additionally, I explored best practices for optimizing memory transfers between the host (CPU) and device (GPU). \n In the next phase, I learned how to write and launch custom CUDA kernels in Python. This included understanding CUDA’s parallel thread hierarchy and utilizing atomic operations to prevent race conditions during parallel execution. \n The course also covered the use of multidimensional grids and shared memory in CUDA Python. I applied these concepts to work efficiently on 2D matrices, leveraging shared memory to enhance performance through memory coalescing. \n Finally, I reviewed all the core concepts covered in the course, completed an assessment, and earned a certificate of completion. This workshop significantly enhanced my ability to build and optimize GPU-accelerated Python applications using Numba and CUDA."
        },
        {
            "title": "10-Day GPU Accelerated Computing and Codeathon",
            "date": "October 28, 2024",
            "Institution": "KPR Institute of Engineering and Technology",
            "thumbnail": require('./Components/Certifications/Images/Course~ACM~GP Accelerated Computing Codeathon.png'),
            "description": "Participated in 10-day GPU Accelerated Computing and Codeathon, powered by Nvidia Instructors and IEEE Computational Intelligence Society and collaboration with ACM"
        },
        {
            "title": "Machine Learning Piplines with Azure ML Studio",
            "date": "July 19, 2021",
            "Institution": "Coursera",
            "thumbnail": require('./Components/Certifications/Images/Course~Coursera~Machine Learning Piplines with Azure ML Studio.jpg'),
            "description": "Got a chance to learn topics of Data Cleaning, Accounting for Class Imbalance, Training a Two-Class Boosted Decision Tree Model and Hyperparameter Tuning, Scoring and Evaluating the Models, Publishing the Trained Model as a Web Service for Inference"
        },
        {
            "title": "Git and Github For Beginners",
            "date": "Sept 10, 2021",
            "Institution": "Udemy",
            "thumbnail": require('./Components/Certifications/Images/Course~Udemy~Git and Github For Beginners.jpeg'),
            "description": "Learned about version control systems, git commands, branches and performed pushing projects through git"
        },
        {
            "title": "Deep Learning",
            "date": "July - Oct, 2021",
            "Institution": "NPTEL",
            "thumbnail": require('./Components/Certifications/Images/Course~NPTEL~Deep Learning.jpg'),
            "description": "Here is comprehensive TIMELINE of course:\nWeek 1: History of Deep Learning, Deep Learning Success Stories, McCulloch Pitts Neuron \nWeek 2: Multilayer Perceptrons (MLPs), Representation Power of MLPs, Sigmoid Neurons, Gradient Descent\nWeek 3: Feed Forward Neural Networks, Back propagation\nWeek 4: Gradient Descent (GD), Momentum Based GD, Nesterov Accelerated GD, Stochastic GD\nWeek 5: Principal Component Analysis and its interpretations, Singular Value Decomposition\nWeek 6: Auto encoders and relation to PCA Regularization in auto encoders, Denoising auto encoders, Sparse auto encoders\nWeek 7: Regularization: Bias Variance Tradeoff, L2 regularization Early stopping, Dataset augmentation\nWeek 8: Greedy Layerwise Pre-training, Better activation functions, Better weight initialization methods, Batch Normalization\nWeek 9: Learning Vectorial Representations Of Words\nWeek 10: Convolutional Neural Networks, LeNet, AlexNet, ZF-Net, VGGNet, GoogLeNet, ResNet\nWeek 11: Recurrent Neural Networks, Back propagation through time (BPTT), Vanishing and Exploding Gradients, Truncated BPTT, GRU, LSTMs\nWeek 12: Encoder Decoder Models, Attention Mechanism, Attention over images"
        },
        {
            "title": "Building Transformer-Based Natural Language Processing Applications",
            "date": "March 11, 2022",
            "Institution": "NVIDIA",
            "thumbnail": require('./Components/Certifications/Images/Course~NVIDIA~Building Transformer-Based Natural Language Processing Applications.jpg'),
            "description": "I explored how the Transformer architecture works in detail and Learned how to apply self-supervised Transformer-based models to concrete NLP tasks using NVIDIA NeMo and finally deployed an NLP project for live inference on NVIDIA Triton"
        },
        {
            "title": "Fundamentals of Deep Learning",
            "date": "March 10, 2022",
            "Institution": "NVIDIA",
            "thumbnail": require('./Components/Certifications/Images/Course~NVIDIA~Fundamentals of Deep Learning.jpg'),
            "description": "Learned to apply data augmentation to enhance a dataset and improve model generalization and also studied Pre-trained Models and Recurrent Networks and finally executed a project based on Object Classification"
        },
        {
            "title": "Java Course with Practical Examples for Absolute Beginners",
            "date": "October 2, 2021",
            "Institution": "UDEMY",
            "thumbnail": require('./Components/Certifications/Images/Course~Udemy~java Course.jpeg'),
            "description": "Learnt core concepts of java, implementing OOPs paradigm, Advanced level - Collections, Generics, Exceptions, File handling, Collections, Multithreading, Streams, Lambda functions and multithreading"
        }
    ]
};