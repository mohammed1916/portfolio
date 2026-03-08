// Import all the images
import designImage from './img/Design/merit.png';
import designImage2 from './img/Design/close_up.jpg';
import designImage3 from './img/Design/first_rank.jpg';
import designImage4 from './img/Design/ceremony_pg.jpg';
import githubIcon from './img/icons/media/github.png';
import linkedinIcon from './img/icons/media/linkedin.png';
import postOutlineIcon from './img/icons/media/post-outline.png';

// Import certification images
import sparksFoundationCert from './Components/Certifications/Images/Internship~The Sparks Foundation~Hybrid Mobile App.png';
import kotlinCert from './Components/Certifications/Images/Course~Coursera~Kotlin For Java Developers.jpg';
import cudaCppCert from './Components/Certifications/Images/Course~Nvidia~C++Cuda.png';
import cudaPythonCert from './Components/Certifications/Images/Course~Nvidia~PythonCuda.png';
import acmCert from './Components/Certifications/Images/Course~ACM~GP Accelerated Computing Codeathon.png';
import azureCert from './Components/Certifications/Images/Course~Coursera~Machine Learning Piplines with Azure ML Studio.jpg';
import gitCert from './Components/Certifications/Images/Course~Udemy~Git and Github For Beginners.jpeg';
import deepLearningCert from './Components/Certifications/Images/Course~NPTEL~Deep Learning.jpg';
import transformerCert from './Components/Certifications/Images/Course~NVIDIA~Building Transformer-Based Natural Language Processing Applications.jpg';
import fundamentalsCert from './Components/Certifications/Images/Course~NVIDIA~Fundamentals of Deep Learning.jpg';
import ibmCert from './Components/Certifications/Images/Course~IBM~HandwrittenDigitRecognition.png';
import javaCert from './Components/Certifications/Images/Course~Udemy~java Course.jpeg';

// Import project images
import project2_1 from './Components/Projects/Images/2/1.jpeg';
import project2_2 from './Components/Projects/Images/2/2.jpeg';
import project2_3 from './Components/Projects/Images/2/3.jpeg';
import project1_1 from './Components/Projects/Images/1/1.jpeg';
import project1_2 from './Components/Projects/Images/1/2.jpeg';
import project1_3 from './Components/Projects/Images/1/3.jpeg';
import project3_1 from './Components/Projects/Images/3/1.png';
import project3_2 from './Components/Projects/Images/3/2.png';
import project4_1 from './Components/Projects/Images/4/1.png';
import project4_2 from './Components/Projects/Images/4/2.png';
import project4_3 from './Components/Projects/Images/4/3.png';
import project4_4 from './Components/Projects/Images/4/4.png';
import project4_5 from './Components/Projects/Images/4/5.png';
import project4_6 from './Components/Projects/Images/4/6.png';
import project4_7 from './Components/Projects/Images/4/7.png';
import project5_1 from './Components/Projects/Images/5/1.png';
import project5_2 from './Components/Projects/Images/5/2.png';
import project5_3 from './Components/Projects/Images/5/3.png';
import project5_4 from './Components/Projects/Images/5/4.png';
import project5_5 from './Components/Projects/Images/5/5.png';
import project5_6 from './Components/Projects/Images/5/6.png';

import project6_1 from './Components/Projects/Images/6/1.png';
import project6_2 from './Components/Projects/Images/6/2.png';
import project6_3 from './Components/Projects/Images/6/3.png';


export const data = {
    "information": {
        "name": "Mohammed Abdullah",
        "educationImages": {
            "Postgraduate": [
                designImage3,
                designImage4
            ],
            "Undergraduate": [
                designImage,
                designImage2
            ]
        },
        "email": "developermohammed01@gmail.com",
        "whoami": "I am Mohammed Abdullah. An aspiring software developer who likes to learn and explore new frameworks.",
        "description": "I have completed my PG in M.Tech IT (Spln. in AI & DS) in May 2025 from Anna University (CEG Campus) in Tamil Nadu, India, and B.E CSE from PEC (Affiliated to Anna University), chennai - 2023. I love creating user-centric applications. I have developed websites using NextJS. Apart from it, I have also explored the domain of mobile application development and created apps for native android and also a hybrid mobile application using flutter. I have also worked with Godot engine, using which I designed a memory game for android.",
        "location": "Chennai, Tamil Nadu, India",
        "profiles": [
            {
                "media": "Github",
                "url": "https://github.com/mohammed1916/",
                "icon": githubIcon
            },
            {
                "media": "Linkedin",
                "url": "https://www.linkedin.com/in/curious-mohammed-abdullah/",
                "icon": linkedinIcon
            },
            {
                "media": "Blogs",
                "url": "https://medium.com/@curiousabdullah",
                "icon": postOutlineIcon
            }
        ]
    },
    "education": [
        {
            "Institution": "Anna University, CEG campus , Chennai",
            "Type": "Post graduate - M.Tech IT (Spln. in AI & DS)",
            "Year of Passing": "2025",
            "Grade": "9 C.G.P.A",
            "percentage": "90%",
            "website": "Current state university of Tamil Nadu and Asia's historical first college, https://ceg.annauniv.edu/"
        },
        {
            "Institution": "Panimalar Engineering College, Chennai",
            "Type": "Undergraduate - B.E Computer Science and Engineering",
            "Year of Passing": "2023",
            "Grade": "9.51 C.G.P.A",
            "percentage": "95.1%",
            "website": "https://panimalar.ac.in/"
        },
        {
            "Institution": "Unity Public School, Chennai",
            "Type": "12th Standard",
            "Year of Passing": "2019",
            "Grade": "87.3%",
            "percentage": "87.3%",
            "website": "http://www.unitypublicschool.com/"
        },
        {
            "Institution": "Unity Public School, Chennai",
            "Type": "10th Standard",
            "Year of Passing": "2017",
            "Grade": "10 C.G.P.A",
            "percentage": "95%",
            "website": "http://www.unitypublicschool.com/"
        },
    ],
    "work": [
        {
            "company": "BBBS Pvt. Ltd.",
            "location": "Chennai, Tamil Nadu, India",
            "title": "AI Engineer",
            "thumbnail": "",
            "dates": "Sep 2025 - Present",
            "description": "Working on defence technology solutions with geospatial analytics, vision-language systems, and LLM-powered automation.",
            "domain": "Defence Technology Solutions",
            "projects": [
                {
                    "name": "Marine Anomaly Detection Platform",
                    "tech": "Python, FastAPI, React, Kafka, Redis, Parquet, Leaflet",
                    "highlights": [
                        "Engineered a streaming AIS analytics pipeline using Kafka and Celery + Redis workers for large-scale spatio-temporal analysis across 244M+ AIS records.",
                        "Developed a geospatial analytics platform with vessel proximity queries, trajectory visualization, and anomaly detection for route deviation and loitering.",
                        "Implemented vessel trajectory forecasting with Amazon Chronos transformer models, achieving around 2s prediction latency per vessel."
                    ]
                },
                {
                    "name": "Video-Based Assembly Task Inference System",
                    "tech": "Python, OpenCV, Vision-Language Models, MediaPipe, FAISS",
                    "highlights": [
                        "Contributed to a computer vision pipeline to infer industrial assembly workflows from video streams.",
                        "Extracted multi-region motion descriptors with MediaPipe landmarks and OpenCV; benchmarked Qwen2-VL, SmolVLM, Jina-VLM, and custom VLMs.",
                        "Built a FAISS-based CLIP embedding retrieval system, reaching about 78% classification accuracy across assembly task categories."
                    ]
                },
                {
                    "name": "LLM-powered ERP Data Extraction Pipeline",
                    "tech": "React, Node.js, SQLite, Gemini API, Ollama, Cheerio, Tesseract.js",
                    "highlights": [
                        "Automated ERP product data entry through an LLM-driven extraction pipeline that outputs ERP-ready CSV/JSON schemas.",
                        "Enabled ingestion from URLs, images, and PDFs with DOM parsing and OCR, then consolidated retrieval context in a vector store.",
                        "Developed an agentic extraction workflow using Gemini API and local Qwen inference via Ollama, with validation layers and CI/CD deployment."
                    ]
                }
            ],
            "technicalSkills": [
                "Python",
                "TypeScript",
                "JavaScript",
                "Kafka",
                "Redis",
                "Parquet",
                "Celery",
                "FAISS",
                "PyTorch",
                "Transformers",
                "FastAPI",
                "Flask",
                "Node.js",
                "React"
            ],
            "achievements": [
                "Merit Scholarship by Government of Tamil Nadu for securing 91.793 percentile in TANCET.",
                "Kaggle competitor in Top 7% (14/217 teams) in ESA Trojan Horse Hunt and participant in 8+ ML competitions.",
                "Participant in NVIDIA GPU Accelerated Computing Codeathon (IEEE CIS + ACM, Oct 2024).",
                "Participant in multiple hackathons including Google Cloud, AWS, and MongoDB competitions (2024-2026)."
            ]
        },
        {
            "company": "The Sparks Foundation",
            "location": "Online/ Work from Home",
            "title": "Intern",
            "thumbnail": sparksFoundationCert,
            "dates": "Sept - Oct 2021",
            "description": "Worked on creating a Hybrid Mobile App using Flutter.<br >Created several models in database for bank transaction simulation.<br >Performed CRUD operations"
        }
    ],
    "skills": [
        {
            "type": "Programming Languages",
            "Knowledge in Advance Topics": "Javascript, Python, C",
            "Knowledge in Main Concepts": "TypeScript, Java",
            "Can do with Documentation": "C++, GDScript, Dart, Kotlin, C#"
        }
        ,
        {
            "type": "Web Frameworks And Libraries",
            "Knowledge in Advance Topics": "ReactJs, NextJS 13 and NextJS 15",
            "Knowledge in Main Concepts": "Flask,MongoDB, MySQL, Firebase, NodeJS, ExpressJS, Socket.io",
            "Can do with Documentation": "Flutter, Django",
        },
        {
            "type": "AI Frameworks And Libraries",
            "Knowledge in Advance Topics": "Pytorch, Keras, Pandas, Numpy, Matplotlib, Seaborn",
            "Knowledge in Main Concepts": "Tensorflow, Scikit-learn",
            "Can do with Documentation": "OpenCV, NLTK, Spacy",
        },
        {
            "type": "Tools and IDE's",
            "Mostly": "Docker, Windows Subsytem for Linux (WSL), VS code, Git VCS, Postman",
            "If required": "Godot Game Engine, Android Studio",
            "Beginner": "Unity",
        }
    ]
    ,
    "projects": [

        {
            "title": "Cryptocurrency Analytics Dashboard",
            "type": "Deployed Website",
            "tech": "Next.js 15 \ TS \ Tailwind \ shadcn/ui \ Chart.js \ Framer Motion",
            "thumbnail": project5_3,
            "link": "https://github.com/mohammed1916/crypt",
            "description": `
            • Next.js 15, TS, Tailwind, shadcn/ui, Chart.js, Framer Motion
            – Engineered a real-time crypto dashboard with theme switching (light/dark/acrylic), animated transitions, and responsive UI/UX.
            – Integrated CoinGecko API with debounced requests, local caching, and backend proxying to prevent
            API key misuse and ensure reliability.
            – Implemented multi-coin comparison charts with react-chartjs-2 for side-by-side trend analysis.
            – Optimized performance and SEO: achieved 1.0s FCP, 1.2s LCP, 150ms TBT, 0.044 CLS on Lighthouse.
            – Deployed at Live Link — https://github.com/mohammed1916/crypt
            - Code: https://github.com/mohammed1916/crypt`,
            "gallery": [
                {
                    original: project5_1,
                    thumbnail: project5_1,
                },
                {
                    original: project5_2,
                    thumbnail: project5_2,
                },
                {
                    original: project5_3,
                    thumbnail: project5_3,
                },
                {
                    original: project5_4,
                    thumbnail: project5_4,
                },
                {
                    original: project5_5,
                    thumbnail: project5_5,
                },
                {
                    original: project5_6,
                    thumbnail: project5_6,
                },
            ]
        },
        {
            "title": "Adobe Express Addon",
            "type": "Deployed Addon",
            "tech": " React \ TypeScript \ Redux Toolkit \ Adobe Express APIs",
            "thumbnail": project4_2,
            "link": " https://adobesparkpost.app.link/TR9Mb7TXFLb?addOnId=w96k0hi74",
            "description": `
            • React, TypeScript, Redux Toolkit, Adobe Express APIs
            - Developed an Adobe Express add-on with Typescript for managing and inserting custom SVG, GIF, and raster
            graphics (JPG, PNG), with validation and user feedback for unsupported formats.
            - Implemented Redux-based state management for symbol inventory, tagging, and selection using Agile methodology
            by creating basic working structure first and adding other features like multi-select tagging later.
            - Built SVG parsers to extract viewBox, dimensions, and aspect ratio for accurate rendering.
            - Integrated Adobe Express APIs for seamless insertion and persistent inventory across sessions.
            - [Live Add-on https://adobesparkpost.app.link/TR9Mb7TXFLb?addOnId=w96k0hi74 ]. Verifiable via my
            portfolio link under Help and Support section links.
            - Code: https://github.com/mohammed1916/design_mesh`,
            "gallery": [
                {
                    original: project4_1,
                    thumbnail: project4_1,
                },
                {
                    original: project4_2,
                    thumbnail: project4_2,
                },
                {
                    original: project4_3,
                    thumbnail: project4_3,
                },
                {
                    original: project4_7,
                    thumbnail: project4_7,
                },
                {
                    original: project4_4,
                    thumbnail: project4_4,
                },
                {
                    original: project4_5,
                    thumbnail: project4_5,
                },
                {
                    original: project4_6,
                    thumbnail: project4_6,
                },
            ]
        },
        {
            "title": "Dynamic Portfolio generator",
            "type": "Frontend, MiddleWare, Backend, Socket Programming",
            "tech": "Puppeteer + NodeJS + ExpressJS + Socket.io + ReactJS + Linkedin 3-legged API + Pm2 Process Manager",
            "thumbnail": project2_1,
            "link": " https://mohammedabdullahportfolio.web.app/",
            "description": `Employed REST API's to perform 3-legged authentication for linkedIn.
            - Undertook web scraping to gather user data from LinkedIn and Github profiles using Puppeteer.
            - Used Agile methodology to develop the project in iterations, starting with a basic working structure and progressively adding features, with my two other team members focusing on frontend and backend development respectively.
            - Used socket programming to send the scrapped data between middleware server and client. 
            - Utilized ReactJS for frontend and NodeJS with ExpressJS for backend.
            - Used Pm2 process manager to keep the middleware server alive.
            - Project can be found at https://github.com/mohammed1916/Dynamic-Portfolio-Generator
            - Had published a white paper: Karthikeyan A, Mohammed Abdullah, B Jeevan Akshay & Kevin Christopher A. (in press). "Expediting HR Management Via Dynamic E-Portfolio by Employing Web Scrapper," Journal of Survey in Fisheries Sciences, Vol. 10 No. 4S (2023):(Special Issue 4). http://sifisheriessciences.com/journal/index.php/journal/article/view/1172/1184`,
            "gallery": [
                {
                    original: project2_1,
                    thumbnail: project2_1,
                },
                {
                    original: project2_2,
                    thumbnail: project2_2,
                },
                {
                    original: project2_3,
                    thumbnail: project2_3,
                },
            ]
        },
        {
            "title": "Memory Game",
            "type": "Android",
            "tech": "Godot Game Engine \ GDScript \ Android Java",
            "thumbnail": project1_3,
            // "link": "https://play.google.com/store/apps/details?id=org.greenelite.memorize",
            "link": "https://github.com/mohammed1916/Memorize",
            "description": "This game was created to Train yourself to memorize and remember by matching color pairs. <br > It was made using Godot game engine and GDScript. <br >This game was targetted for Android. <br > The game has a score counter, and the player can choose the difficulty level by selecting the number of cards to be matched. <br > The game is designed to improve memory and concentration skills, and it is suitable for all ages.",
            "gallery": [
                {
                    original: project1_1,
                    thumbnail: project1_1,
                },
                {
                    original: project1_2,
                    thumbnail: project1_2,
                },
                {
                    original: project1_3,
                    thumbnail: project1_3,
                },
            ]
        },
        {
            "title": "Portfolio",
            "type": "Deployed Website",
            "tech": "ReactJs library \ vite \ Framer Motion \ MUI",
            "thumbnail": project6_1,
            "link": "https://mohammedabdullah.pages.dev/",
            "description": `
            - Made a portfolio template using ReactJs library + vite + Framer Motion + MUI.
            - Hosted using Cloudflare Pages.`,
            "gallery": [
                {
                    original: project6_1,
                    thumbnail: project6_1,
                },
                {
                    original: project6_2,
                    thumbnail: project6_2,
                },
                {
                    original: project6_3,
                    thumbnail: project6_3,
                },
            ]
        },
        {
            "title": "GAZAL CAPITAL",
            "type": "Deployed Website",
            "tech": "ReactJS + MUI + Firebase + Google Apps Script + Google Sheets",
            "thumbnail": project3_1,
            "link": "https://github.com/mohammed1916/gazalcapital",
            "description": "A website for startup company, Gazal Capital. Built using ReactJS in javascript styled partially with MUI and tailwindcss. <br > Deployed Application <br >This website is hosted using firebase here: https://gazal-capital.web.app/ <br> Leveraged Firebase for NoSQL storage and Google Apps Script to process web queries and export data to Google Sheets.",
            "gallery": [
                {
                    original: project3_1,
                    thumbnail: project3_1,
                },
                {
                    original: project3_2,
                    thumbnail: project3_2,
                },

            ]
        },
    ],
    "certifications": [

        {
            "title": "Kotlin For Java Developers",
            "date": "July 22, 2021",
            "Institution": "Coursera",
            "thumbnail": kotlinCert,
            "description": "Learned concepts of Nullability, Functional Programming, Properties, OOP, Conventions in Kotin"
        },
        {
            "title": "Fundamentals of Accelerated Computing with CUDA C/C++",
            "date": "October 20, 2024 - expires on March 16, 2026",
            "Institution": "Nvidia",
            "thumbnail": cudaCppCert,
            "description": "Obtained Certificate of Competency for CUDA C/C++ <br > Credential: https://learn.nvidia.com/certificates?id=p837-4HkR1mmR-5G-QROOA <br >I gained a solid foundation in GPU programming using CUDA. The course began with an introduction and setup, where I registered on the NVIDIA platform to access course materials. I then learned the essential CUDA syntax and concepts required to write, compile, and run GPU-enabled C/C++ applications. This included understanding thread hierarchies, and how to allocate and manage GPU memory. <br > Further, I explored memory management techniques using CUDA-managed (unified) memory. I learned to profile CUDA applications using the command-line profiler and gained insights into optimizing memory behavior based on profiling results. The course also covered asynchronous execution with CUDA streams and how to use NVIDIA Nsight Systems for visual profiling, which helped me identify opportunities for overlapping data transfers and computation. <br > Finally, I reviewed all key learnings and completed an assessment to earn a certificate. This course significantly strengthened my ability to develop and optimize GPU-accelerated applications using CUDA C/C++."
        },
        {
            "title": "Fundamentals of Accelerated Computing with CUDA Python",
            "date": "October 23, 2024",
            "Institution": "Nvidia",
            "thumbnail": cudaPythonCert,
            "description": "Obtained Certificate of Competency for CUDA C/C++ <br > Credential: https://learn.nvidia.com/certificates?id=fV0VTTEgRMqkL7nJ4oDgSQ <br >The course began with a brief introduction and setup via the NVIDIA Learning platform. I was then introduced to the Numba compiler and learned how to use Numba decorators to GPU-accelerate numerical Python functions. Additionally, I explored best practices for optimizing memory transfers between the host (CPU) and device (GPU). <br > In the next phase, I learned how to write and launch custom CUDA kernels in Python. This included understanding CUDA’s parallel thread hierarchy and utilizing atomic operations to prevent race conditions during parallel execution. <br > The course also covered the use of multidimensional grids and shared memory in CUDA Python. I applied these concepts to work efficiently on 2D matrices, leveraging shared memory to enhance performance through memory coalescing. <br > Finally, I reviewed all the core concepts covered in the course, completed an assessment, and earned a certificate of completion. This workshop significantly enhanced my ability to build and optimize GPU-accelerated Python applications using Numba and CUDA."
        },
        {
            "title": "10-Day GPU Accelerated Computing and Codeathon",
            "date": "October 28, 2024",
            "Institution": "KPR Institute of Engineering and Technology",
            "thumbnail": acmCert,
            "description": "Participated in 10-day GPU Accelerated Computing and Codeathon, powered by Nvidia Instructors and IEEE Computational Intelligence Society and collaboration with ACM"
        },
        {
            "title": "Machine Learning Piplines with Azure ML Studio",
            "date": "July 19, 2021",
            "Institution": "Coursera",
            "thumbnail": azureCert,
            "description": "Got a chance to learn topics of Data Cleaning, Accounting for Class Imbalance, Training a Two-Class Boosted Decision Tree Model and Hyperparameter Tuning, Scoring and Evaluating the Models, Publishing the Trained Model as a Web Service for Inference"
        },
        {
            "title": "Git and Github For Beginners",
            "date": "Sept 10, 2021",
            "Institution": "Udemy",
            "thumbnail": gitCert,
            "description": "Learned about version control systems, git commands, branches and performed pushing projects through git"
        },
        {
            "title": "Deep Learning",
            "date": "July - Oct, 2021",
            "Institution": "NPTEL",
            "thumbnail": deepLearningCert,
            "description": "Credentials: https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL21CS76S2335215203121592 <br > I recently completed a comprehensive deep learning course that offered both theoretical foundations and practical insights into modern neural network architectures and training techniques. <br > Week 1 covered the history of deep learning, its early breakthroughs, and the foundational McCulloch-Pitts neuron model. <br > In Week 2, I learned about Multilayer Perceptrons (MLPs), their expressive power, and the mechanics of sigmoid neurons and gradient descent. <br > Week 3 focused on feedforward neural networks and introduced the backpropagation algorithm for training. <br > Week 4 deepened this understanding by exploring various optimization techniques like momentum-based gradient descent, Nesterov accelerated gradient, and stochastic gradient descent. <br > In Week 5, I studied Principal Component Analysis (PCA) and Singular Value Decomposition (SVD) for dimensionality reduction and data interpretation. <br > Week 6 introduced autoencoders and their relation to PCA, including concepts like regularized, denoising, and sparse autoencoders. <br > Week 7 emphasized regularization techniques such as L2 regularization, early stopping, and data augmentation, focusing on the bias-variance tradeoff. <br > Week 8 explored advanced training strategies like greedy layerwise pre-training, improved activation functions, weight initialization, and batch normalization. <br > In Week 9, I delved into learning vectorial representations of words, a fundamental concept in NLP. <br > Week 10 covered Convolutional Neural Networks (CNNs) and their evolution through architectures like LeNet, AlexNet, ZF-Net, VGGNet, GoogLeNet, and ResNet. <br > Week 11 focused on Recurrent Neural Networks (RNNs), including BPTT, challenges like vanishing/exploding gradients, and architectures such as GRUs and LSTMs. <br > Finally, Week 12 concluded with Encoder-Decoder models and the attention mechanism, including its application to both sequences and images."
        },
        {
            "title": "Building Transformer-Based Natural Language Processing Applications",
            "date": "March 11, 2022",
            "Institution": "NVIDIA",
            "thumbnail": transformerCert,
            "description": "Credentials: https://learn.nvidia.com/certificates?id=0f2d9871de1b49b18b4d9c8fbd018937 <br > I explored how the Transformer architecture works in detail and Learned how to apply self-supervised Transformer-based models to concrete NLP tasks using NVIDIA NeMo and finally deployed an NLP project for live inference on NVIDIA Triton"
        },
        {
            "title": "Fundamentals of Deep Learning",
            "date": "March 10, 2022",
            "Institution": "NVIDIA",
            "thumbnail": fundamentalsCert,
            "description": "Credential: https://learn.nvidia.com/certificates?id=6d11c293c3fc445f8f853ef77e000fd5 <br > Learned to apply data augmentation to enhance a dataset and improve model generalization and also studied Pre-trained Models and Recurrent Networks and finally executed a project based on Object Classification"
        },
        {
            "title": "Project on A Novel Method for Handwritten Digit Recognition System",
            "date": "February 20, 2023",
            "Institution": "IBM Developer Skills Network",
            "thumbnail": ibmCert,
            "description": `The project can be found at: https://github.com/mohammed1916/IBM-Project-3542-1658575041/tree/main/Final%20Deliverables
            
            <br >DESCRIPTION: 
            <br >Language: Python
            <br >Framework: Flask
            <br >Libraries: tensorflow, numpy, matplotlib, sklearn
            
            <br >Worked in a team with Agile SDLC to design, create, train, and test an ML model.
            
            <br >Note: The project was submitted as part of the Nalaiya Thiran programme partnered with IBM. Credentials: https://courses.ictacademy.skillsnetwork.site/certificates/98dcd21d a1ee4de49b07df44df0da0d0 
            
            <br ><br >FEATURES: Deployed ML model using Flask App which could be tunnelled to an external URL using Ngrok to execute the program in Google Colab.
            
            <br ><br >MODEL:
            <br >The ML model was created by importing MNIST data set and reshaping the images, which were divided into training and testing datasets.
            This was then passed through a CNN with 2D convolution layer with ReLU as its activation function to combat vanishing gradients, and then downsampled using MaxPooling layer followed by a flatten and two dense layers and finally compiled using SGD optimizer and categorical cross entropy loss function.
            This was exported in h5 format and saved in the static folder of the flask application.
            
            <br ><br >FLASK APPLICATION:
            <br >The model was loaded into the Flask application by importing the exported model. This was then used to determine the digit from the uploaded image, as recognized by the model and to calculate the accuracy.
            The root '/' during GET renders the index.html file present in the templates folder. When a POST request is made after determining the digit, the power of jinja statements is utilised in dynamic rerendering of the html page.
            During this process the request library is used to obtain the uploaded image.
            
            
            TESTING: load testing was performed using locust for POST where multiple locust Tasks were created in which the HttpSession client uploaded test images to validate for HTTP 400 OK response.
            `
        },
        {
            "title": "Java Course with Practical Examples for Absolute Beginners",
            "date": "October 2, 2021",
            "Institution": "UDEMY",
            "thumbnail": javaCert,
            "description": "Learnt core concepts of java, implementing OOPs paradigm, Advanced level - Collections, Generics, Exceptions, File handling, Collections, Multithreading, Streams, Lambda functions and multithreading"
        }
    ]
};
