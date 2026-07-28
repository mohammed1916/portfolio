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

// Multi-Agent RAG platform screenshots
import project7_1 from './Components/Projects/Images/7/1.png';

// Resume PDF served from the bundle so it can be both viewed inline and downloaded.
import resumePdf from './data/resume/Resume_Abdullah.pdf';


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
        "role": "AI Engineer",
        "tagline": "Building production AI across distributed streaming analytics, computer vision, and vision-language systems.",
        "phone": "+91 9150289582",
        "whoami": "I am Mohammed Abdullah, an AI Engineer working on production and proof-of-concept AI systems across distributed streaming analytics, computer vision, vision-language models, and edge/FPGA acceleration.",
        "description": "AI Engineer with experience building both production and proof-of-concept AI systems across distributed streaming analytics, computer vision, vision-language models, multimodal AI, and machine learning infrastructure. Experienced with FastAPI, Kafka, PyTorch, and React, with hands-on experience processing hundreds of millions of records and deploying real-time AI systems. I hold an M.Tech IT (Spln. in AI & DS) from Anna University, CEG Campus (First Rank Holder, CGPA 9.0) and a B.E in Computer Science and Engineering from Panimalar Engineering College (Merit Holder, CGPA 9.51).",
        "highlights": [
            { "value": "244M+", "label": "AIS records processed in a distributed maritime analytics platform" },
            { "value": "23-layer", "label": "YOLOv8-Nano network deployed as a custom FPGA accelerator" },
            { "value": "1st Rank", "label": "M.Tech IT (AI & DS), Anna University CEG Campus" },
            { "value": "Top 7%", "label": "ESA Trojan Horse Hunt Kaggle competition (14/217 teams)" }
        ],
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
    "resume": {
        "file": resumePdf,
        "fileName": "Mohammed_Abdullah_Resume.pdf",
        "updated": "July 2026",
        "summary": "AI Engineer with experience building production and proof-of-concept AI systems across distributed streaming analytics, computer vision, vision-language models, multimodal AI, and machine learning infrastructure."
    },
    "achievements": [
        "Merit Scholarship awarded by the Government of Tamil Nadu for securing 91.793 percentile in TANCET.",
        "Kaggle Competitor - Top 7% (14/217 teams) in ESA 'Trojan Horse Hunt in Time Series Forecasting'; participated in 10+ Machine Learning and Deep Learning competitions including NeurIPS Code Golf and ARC Prize.",
        "Participant in the NVIDIA GPU Accelerated Computing Codeathon organised with IEEE Computational Intelligence Society and ACM (Oct 2024).",
        "Participated in multiple hackathons including Google Cloud, AWS, and MongoDB developer competitions (2024-2026)."
    ],
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
            "title": "AI Engineer 1",
            "thumbnail": "",
            "dates": "Sep 2025 - Present",
            "description": "Building production AI for defence technology solutions: distributed streaming analytics, deep-learning anomaly detection, agentic AI, edge/FPGA inference acceleration, vision-language systems, and GPU-optimised 3D reconstruction.",
            "domain": "Defence Technology Solutions",
            "projects": [
                {
                    "name": "Maritime Vessel Analytics and Anomaly Detection Platform",
                    "focus": "Agentic AI + Deep Learning (Anomaly Detection, Time Series) + Synthetic Data Generation + Scalable Distributed Systems",
                    "tech": "Python, PyTorch, FastAPI, React, LangChain, LangGraph, Kafka, Redis, Celery, RAPIDS cuDF, Docker",
                    "highlights": [
                        "Built a distributed maritime analytics platform processing 244M+ AIS vessel records for vessel tracking, route analysis, and anomaly detection across global shipping traffic.",
                        "Developed FastAPI services and React dashboards for real-time vessel tracking, trajectory visualization over both stored and live-fetched data, region-based proximity analysis across multiple vessels, operational investigations, and event-driven anomaly alerts using Navtex and Navarea warnings from Hydrobharat feeds.",
                        "Designed a streaming AIS analytics architecture with Apache Kafka, Redis, Celery, and Docker supporting scalable real-time ingestion, distributed processing, task orchestration, caching, and anomaly-detection workflows.",
                        "Designed resilient event-driven pipelines with Kafka Dead Letter Queue (DLQ) mechanisms for fault isolation, message replay, and reliable processing during schema evolution and pipeline failures; validated resilience through poison-pill message testing and DLQ-based recovery.",
                        "Developed multi-step trajectory forecasting predicting up to 10 future AIS positions by encoding locations as Geohash representations and decoding back to coordinates; fine-tuned AutoGluon models achieving an 11% reduction in Haversine position error versus ARIMA and Prophet baselines on the Piraeus AIS dataset.",
                        "Generated 6.8M+ synthetic AIS spoofing trajectories (2.8% of the 244M-record dataset) using mathematical trajectory models and LLM-guided augmentation to simulate anomalous vessel behaviour for detection training.",
                        "Designed a GPU-accelerated pipeline using Parquet partitioned datasets, the PyArrow Dataset API for predicate pushdown and selective column loading, and RAPIDS cuDF for GPU joins, aggregations, and geospatial filtering — achieving sub-3-second retrieval of 20K vessel records for user-selected map regions and time ranges.",
                        "Improved anomaly assessment by correlating vessel telemetry with weather datasets, maritime regulations (NOAA Maritime Zones and Boundaries land domains), and historical movement behaviour to reduce false-positive investigations."
                    ]
                },
                {
                    "name": "Real-Time YOLOv8-Nano FPGA Inference Accelerator for UAV Object Detection",
                    "focus": "Edge AI + FPGA Accelerator Architecture + RTL Hardware/Software Co-Design",
                    "tech": "Python, C++, Vitis HLS, Verilog, Vivado, PyTorch, Ultralytics YOLOv8",
                    "highlights": [
                        "Designed a reusable weight-stationary FPGA accelerator for the complete 23-layer YOLOv8-Nano network targeting the Xilinx Kria KV260, replacing a monolithic implementation with serialized DDR-backed execution over reusable compute engines.",
                        "Implemented an end-to-end hardware inference pipeline converting real UAV video into FPGA-ready tensors, running RTL simulation, decoding detection logits, applying confidence filtering and NMS, and validating against the PyTorch YOLOv8 reference.",
                        "Built an automated PyTorch-to-RTL deployment flow, quantizing 1.88M detection-head parameters to INT8 and reducing weight storage from 6.5 MB to 1.7 MB (74% reduction) while generating synthesizable Verilog with embedded weights.",
                        "Implemented streaming HLS kernels for Convolution, C2f, Bottleneck, SPPF, Upsample, Concat, and Detect modules with reusable processing elements, shared requantization pipelines, and serialized layer scheduling.",
                        "Performed 11 FPGA architecture experiments across streaming execution, DDR tiling, compute parallelism, memory hierarchy, RTL timing, and buffer reuse to derive the final architecture.",
                        "Cut FPGA resource utilization through architectural redesign: BRAM by 99.9% (15,296 → 11), DSP by 95.4% (1348 → 62), LUTs by 60.1% (231K → 92K), and flip-flops by 53.3% (115K → 54K), enabling full deployment on the KV260.",
                        "Validated RTL with automated regression testing, HLS C simulation, RTL co-simulation, and Python reference comparison, achieving bit-exact layer verification and under 0.2% latency deviation between synthesis estimates and RTL simulation.",
                        "Generated synthesizable Vivado IP and integrated the accelerator into a Zynq UltraScale+ KV260 block design, completing synthesis, place-and-route, and bitstream generation with timing closure (Worst Negative Slack = 0.00 ns)."
                    ]
                },
                {
                    "name": "POC: Behavior Inference System for Industrial Assembly",
                    "focus": "Vision-Language + Computer Vision + Activity Recognition + Multimodal AI + Retrieval (FAISS)",
                    "tech": "Python, VLMs, MediaPipe, YOLO, FAISS, FastAPI, Server-Sent Events",
                    "highlights": [
                        "Developed a real-time worker activity recognition system for industrial assembly environments using computer vision and multimodal AI pipelines as a proof of concept for an internal application.",
                        "Benchmarked Qwen2-VL, Florence-2, InternVL, OpenFlamingo, and BLIP on an internal dataset for inference speed, contextual understanding, and deployment constraints.",
                        "Designed MediaPipe and YOLO-based spatiotemporal feature extraction pipelines modelling worker posture, object interactions, motion patterns, and task progression.",
                        "Implemented temporal evidence aggregation, task-subtask retrieval, and FAISS-based context retrieval, improving behavioural classification from 78.4% to 86.1% Macro-F1 while reducing spurious frame-level label transitions by 62%.",
                        "Built FastAPI backend services, Server-Sent Events (SSE) streaming infrastructure, and analytics dashboards for real-time monitoring and behavioural statistics reporting."
                    ]
                },
                {
                    "name": "Photogrammetry and Gaussian Splatting Research",
                    "focus": "Computer Vision + GPU Optimization + Profiling",
                    "tech": "Gaussian Splatting, Nerfstudio, COLMAP, CuBLAS, cuDNN, Nsight Compute",
                    "highlights": [
                        "Built and maintained a multi-pipeline 3D reconstruction platform integrating COLMAP (SfM) from Nerfstudio for sparse point-cloud reconstruction — optimising the Cholesky function over covariance matrices of feature-matched points — alongside deep-learning-based dense (MVS) reconstruction.",
                        "Benchmarked NeRF models, ReSplat, DepthSplat, and Instant-NGP, reaching 25 peak PSNR on an internal dataset with Nerfstudio's splatfacto; also evaluated Meshroom/AliceVision feature matching under AVX and SSE optimizations (and why CUDA is a poor fit there), with RealityCapture as a black-box reference baseline.",
                        "Used Nsight Compute to identify covariance-computation CUDA kernels as the dominant feature-matching bottleneck, then optimised covariance estimation for Cholesky-based optimization, cutting reconstruction time by 3-5 minutes on multiple 10-second 1080x1920 indoor video sequences.",
                        "Implemented adaptive GPU memory management with automatic VRAM detection and parameter scaling so reconstruction runs reliably from RTX 4060 (8GB) through RTX 4090 (24GB).",
                        "Resolved inference OOM failures by reducing peak GPU memory from 9.6GB to 6.3GB through BF16 aggregation, cache-window tuning, and pipeline-level memory management."
                    ]
                },
                {
                    "name": "Multi-Agent Pursuit-Evasion Simulation",
                    "focus": "Reinforcement Learning + Visualizations",
                    "tech": "Unity ML-Agents, PPO, Self-Play, Plotly, MLflow",
                    "highlights": [
                        "Contributed to a multi-agent reinforcement learning environment in Unity ML-Agents using PPO, self-play, and curriculum learning; designed reward functions governing pursuit efficiency, evasion behaviour, trajectory planning, agent coordination, and competitive interaction.",
                        "Ran large-scale experimentation over curiosity rewards, replay-buffer configurations, learning-rate schedules, self-play settings, and PPO hyperparameters, managing runs in MLflow for metric tracking, model versioning, and reproducibility.",
                        "Developed Plotly analytics dashboards with animated 3D trajectory visualization to analyse policy evolution, plus evaluation pipelines detecting reward hacking, policy regressions, unstable value-function learning, and convergence failures."
                    ]
                }
            ],
            "technicalSkills": [
                "Python",
                "C++",
                "TypeScript",
                "PyTorch",
                "LangChain",
                "LangGraph",
                "Kafka",
                "Redis",
                "Celery",
                "RAPIDS cuDF",
                "PyArrow / Parquet",
                "FAISS",
                "Milvus",
                "Vision-Language Models",
                "YOLO",
                "MediaPipe",
                "Vitis HLS",
                "Verilog / Vivado",
                "CUDA / Nsight Compute",
                "FastAPI",
                "React",
                "Docker"
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
            "domain": "Mobile Application Development",
            "description": "Worked on creating a Hybrid Mobile App using Flutter.<br >Created several models in database for bank transaction simulation.<br >Performed CRUD operations",
            "technicalSkills": [
                "Flutter",
                "Dart",
                "Firebase"
            ]
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
            "Knowledge in Main Concepts": "Flask, FastAPI, MongoDB, MySQL, Firebase, NodeJS, ExpressJS, Socket.io, Kafka, Redis, Celery",
            "Can do with Documentation": "Flutter, Django",
        },
        {
            "type": "AI Frameworks And Libraries",
            "Knowledge in Advance Topics": "PyTorch, Transformers, LangChain, LangGraph, Large Language Models, Vision-Language Models, Pandas, Numpy, Matplotlib, Seaborn",
            "Knowledge in Main Concepts": "LangSmith, Huggingface TRL, Scikit-learn, MLflow, FAISS, Milvus, Tensorflow, LoRA Fine-Tuning, vLLM",
            "Can do with Documentation": "NLTK, Spacy, Time-Series Forecasting, AutoGluon, AMD Vitis HLS",
        },
        {
            "type": "Computer Vision",
            "Knowledge in Advance Topics": "OpenCV, MediaPipe, YOLO, CLIP Embeddings, Object Detection, Pose Estimation",
            "Knowledge in Main Concepts": "Gaussian Splatting, Photogrammetry, COLMAP / Nerfstudio, Semantic Segmentation",
            "Can do with Documentation": "Monocular Depth Estimation, NeRF variants",
        },
        {
            "type": "Systems, Data And GPU",
            "Knowledge in Advance Topics": "Apache Kafka, Redis, Celery, Parquet, PyArrow",
            "Knowledge in Main Concepts": "RAPIDS cuDF, SQLite, CUDA, Nsight Compute, Tensor Cores, cuDNN",
            "Can do with Documentation": "Verilog, Vivado, Vitis HLS, FPGA Deployment",
        },
        {
            "type": "Tools and IDE's",
            "Mostly": "Docker, Windows Subsystem for Linux (WSL), VS Code, Git VCS, Postman, Ollama, TensorBoard",
            "If required": "Godot Game Engine, Android Studio, Unity ML-Agents",
            "Beginner": "Unity",
        }
    ]
    ,
    "projects": [
        {
            "title": "Curriculum-Aware Multi-Agent RAG Platform",
            "type": "AI / Research",
            "tech": "Python \ LangGraph \ Ollama \ Milvus \ SentenceTransformers \ FastAPI \ DOCX Generation",
            // Add further screenshots to src/Components/Projects/Images/7/ and import them above.
            "thumbnail": project7_1,
            "placeholderTags": "LangGraph • RAG • Milvus • Ollama • Multi-Agent",
            "link": "https://github.com/mohammed1916/RAGmultiAgentRevisableDocGenerator",
            "description": `Generative AI • Multi-Agent RAG Systems • Educational AI
            - Built a curriculum-aware multi-agent RAG platform that generates personalized learning plans and structured educational documents for CBSE Class 10/12 and JEE curricula using curriculum-specific vector databases.
            - Designed a LangGraph-based multi-agent workflow for planning, content generation, review, and document generation using Router, Planner, Writer, and Reviewer agents.
            - Implemented curriculum-aware retrieval with SentenceTransformer embeddings and Milvus vector search to provide context-specific recommendations from educational knowledge bases.
            - Developed a state-aware planning framework that extracts and validates student progress, tracks learned topics and timelines, and dynamically adapts learning plans to individual progress.
            - Built an end-to-end document generation pipeline converting AI-generated content into structured Markdown and Microsoft Word (.docx) files through automated formatting and review workflows.
            - Built a knowledge-base ingestion workflow supporting both PDF upload and direct text paste, tagging each source with its subject and chapter so retrieval stays curriculum-scoped; ingested content is chunked and embedded for use across search, notes, plan generation, and the roadmap graph.
            - Built an automated RAG evaluation pipeline measuring retrieval and generation quality: ROUGE-L 0.68, BLEU 0.52, semantic similarity 0.82, groundedness 0.91, context utilization 0.78 across curriculum-specific validation sets.
            - Code: https://github.com/mohammed1916/RAGmultiAgentRevisableDocGenerator`,
            "gallery": [
                {
                    original: project7_1,
                    thumbnail: project7_1,
                },
            ]
        },
        {
            "title": "Multi-Agent Mouse Behavior Recognition",
            "type": "AI / Research",
            "tech": "Python \ LightGBM \ XGBoost \ CatBoost \ Scikit-Learn \ Polars",
            // Placeholder: add competition/feature-importance plots to src/Components/Projects/Images/8/.
            "thumbnail": "",
            "placeholderTags": "Kaggle • Gradient Boosting • Pose Estimation • Polars",
            "link": "https://www.kaggle.com/competitions",
            "description": `Computer Vision • ML in Kaggle Competition
            - Engineered 280+ trajectory, kinematic, interaction, curvature, and temporal features from multi-body-part pose-estimation sequences containing over 12M+ behavioral observations, covering both single-agent and pairwise social-interaction behaviors across datasets with 4-18 tracked body parts.
            - Trained action-specific ensemble models with LightGBM, XGBoost, and CatBoost, using adaptive thresholding, temporal smoothing, and event segmentation to convert frame-level predictions into behavior intervals optimized for the competition's event-level F-score metric.
            - Used Pandas and Polars for large-scale feature generation and experimentation, achieving a 0.078 private leaderboard score and 1190th rank in the Kaggle Multi-Agent Mouse Behavior Recognition competition.`,
            "gallery": []
        },
        {
            "title": "Vision Transformer Research and GPU Optimization",
            "type": "AI / Research",
            "tech": "PyTorch \ CUDA \ Nsight Compute \ Tensor Cores \ cuDNN",
            // Placeholder: add Nsight profiles and segmentation outputs to src/Components/Projects/Images/9/.
            "thumbnail": "",
            "placeholderTags": "SegFormer • BF16 • Tensor Cores • Nsight Compute",
            "link": "https://github.com/mohammed1916/",
            "description": `Computer Vision • Quantization • Multi-Model Training
            - Profiled SegFormer-B0 inference on an RTX 4060 with Nsight Compute, identifying memory-bound execution through cache utilization, bandwidth saturation, occupancy analysis, and kernel stall investigation.
            - Implemented BF16 mixed-precision inference with cuDNN and Tensor Core acceleration, reducing activation memory footprint and improving arithmetic throughput. Cut inference latency from 32.01 ms to 22.04 ms (1.45x speedup) while keeping segmentation quality within 2% mIoU of FP32 on the Cityscapes validation set.
            - Inspired by SegFormer's Vision Transformer architecture, designed a multi-task model with a shared transformer encoder and dual decoders for semantic segmentation and monocular depth estimation on Cityscapes, incurring only 8% mIoU degradation in segmentation and 11% in depth estimation when training at 256x256 instead of computationally intensive 1024x1024 inputs.`,
            "gallery": []
        },
        {
            "title": "NVIDIA Nemotron Model Reasoning Challenge",
            "type": "AI / Research",
            "tech": "LoRA \ Synthetic Data Generation \ vLLM \ LLM Fine-Tuning",
            // Placeholder: add training curves and leaderboard captures to src/Components/Projects/Images/10/.
            "thumbnail": "",
            "placeholderTags": "LoRA • vLLM • Synthetic Data • Reasoning",
            "link": "https://www.kaggle.com/competitions",
            "description": `LLM Finetuning in Kaggle Competition
            - Constructed a synthetic reasoning dataset by extracting structured mathematical and logical problem patterns from the AIMO and NVIDIA Wonderland datasets, converting implicit reasoning structures into executable problem templates using GPT-based models for programmatic transformation and answer derivation.
            - Generated augmented training samples from those templates as semantically equivalent reasoning problems with step-consistent solutions in batches of 1000, validated outputs using Claude-based verification, and filtered inconsistent samples before storing the final dataset as structured CSV for fine-tuning.
            - Maintained class balance across arithmetic, algebraic, combinatorics, physics-inspired reasoning, and logic-based problem types to prevent distribution skew during LoRA training.
            - Fine-tuned LoRA adapters (ranks from 32 down to 16) on the Nemotron-3-Nano-30B model using vLLM-compatible inference pipelines, improving structured reasoning under constrained parameter-efficient adaptation and achieving a 0.840 Kaggle leaderboard score with 1916th rank.`,
            "gallery": []
        },
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
