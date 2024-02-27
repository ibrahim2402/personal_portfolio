import React from 'react';
import LinkedlnIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import BookIcon from '@material-ui/icons/Book';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import ExploreIcon from '@material-ui/icons/Explore';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import CloudIcon from '@material-ui/icons/Cloud';
import StorageIcon from '@material-ui/icons/Storage';
import LundImg from '../assets/Images/lundUnilogo.jpg'
import HkrImg from '../assets/Images/KristianstadUni_logo.png'
import CertImg from '../assets/Images/cert_logo.png'
import ProjectImg from '../assets/Images/profCert_logo.jpg'


export default{
    name: 'Kunle Ibrahim',
    title: 'Data | Software Engineer',
    phone: '0736565835',
    email: 'i.olakunle.ibrahim@gmail.com',
    address: 'Björkhultsvägen 6A, 63229 Eskilstuna. Sweden',

    socials: {
        Linkedln:{
            link: 'https://www.linkedin.com/in/olakunle-ibrahim-1383bb180',
            text: 'My LinkedIn',
            icon: <LinkedlnIcon/>
        },
        Github: {
            link: 'https://github.com/ibrahim2402',
            text: 'My GitHub',
            icon: <GitHubIcon/>
        }
    },
    about: 'Experienced in design, implementation, installation, testing, QA, and maintenance of software systems. Proficient in different development platforms, programming languages, and information system management. \n\n Experienced with the latest software development tools, ETL technologies and data management. Able to effectively selfmanage during independent projects, as well as collaborate as part of a productive team. \n\n I am good communicator with proven inter-personal skills, highly enthusiastic to learn and undertake new challenges. I speak English as a first language with a working knowledge in Swedish language and possess a full Swedish driving licence class B.',

    employments:[
        {
            firm: 'Senior SW | Data Engineer Consultant at Sigma Industry, Eskilstuna',
            date: 'June 2022 - Present',
            desc: 'Solution Architect | Data Engineer at Volvo Powertrain Production (Ongoing Sigma Assignment). \n \n Design and modify technology architecture. Analysing the technology environment and documenting requirements. Develop, evaluate, disseminate, and integrate new standards, specifications, and technologies into existing processes and methodologies. Build data systems and data pipelines. Ingesting, munging, and prepare data for prescriptive and predictive modelling. Build algorithms and prototypes (PoC). Testing the integration of data export in designed architecture for correct functionality. Identify best and suitable cloud technology services for efficiency to improve overall performance of businesses at all levels. Develop and implement a new automate digital solution for businesses operation. Create a technical vision for a specific solution to a business problem. '
        },
        {
            firm: 'Data Engineer at Cabonline Group, Stockholm',
            date: 'Nov 2021 - May 2022',
            desc: 'Developed algorithm and perform data exploration, ingestion, and transformation of data. Acquired quality datasets to build data model for business need. Design, build, and test data pipeline, data architecture, and data warehouse (with major focus on GCP and PoC experience in other platform; AWS, Azure). Tasked with the responsibility of contributing to the continual improvement of the business’s data platforms through his observations and well-researched knowledge. Retrieves and analysed data using SQL, Python, Excel, among other data management systems. Built data loading services for the purpose of importing data from numerous disparate data sources, inclusive of APIs, logs, relational, and non-relational databases. Developed and managed scalable data processing platforms that he uses for exploratory data analysis and real-time analytics. Ensured compliance with governance and security policy of data. Work with business partners and other Tech groups to identify technical needs of the system and determine priority of needs. Analysed, investigated, and resolved problems to help smooth product performance. Tracking the assignment progress through JIRA and version control service like GitHub Repositories. Collaborated with the management in achieving company objectives. Agile methodology'
        },
        {
            firm: 'Software / Data Specialist at TISV Digital Atlanta, Georgia',
            date: 'Dec 2018 - Oct 2021',
            desc: 'Performed extracting, importing, and exporting of data in various database applications. Escalated data issues needing process re-engineering. Managed and maintained data pipeline in both batch and streaming processes. Assisted in implementation, testing, and validating data and software systems. Performed data analysis of key problem areas to assist in root cause analysis. Executed all regular transaction processes necessary to maintain operations records and databases. Performed data reconciliations to identify data anomalies. Audited data on a regular basis to ensure data integrity and quality. Researched and collected data to assist with product development and analysis. \n \n  Quality Assurance Analyst (June,2019 -  Dec.,2019). \n \n Designed test plans, scenarios, scripts, or procedures. Documented software defects, using a bug tracking system, and report defects to software developers. Identified, analysed, and documented problems with program function, output, online screen, or content. Figured out how a system should work and how changes in the future will affect it. Analysed the pros and cons of different options and selected the best option. \n \n System Tester (Dec.,2018 - June,2019). \n \n Developing and architecture training on software systems, systems test to identify failure points and ensure quality software for release to production. Application Backend (Java, JavaScript). Performing continuous integration and delivery of product quality (CI/CD). Retrieving and integrating data between several databases. Working with data quantitative and qualitative analysis, Data protection and Governance. Working with clients to gather requirements. Agile methodology'
        },
        {
            firm: 'Cashier/ Assistant / IT Specialist at Hubertus Restaurant Stockholm',
            date: 'Aug 2015 - Dec 2016',
            desc: 'Worked productively with Restaurant Team to provide better customer service experience and ensure customer satisfaction at all time. Booking and mailing correspondences'
        },
        {
            firm: 'Local Assistant at EFMAB, Stockholm',
            date: 'Jan 2015 - Jul 2015',
            desc: 'Cleaning and hall management'
        },
        {
            firm: 'Computer Engineer (Developer) at Softline Communication Company, Ado Odo/Ota',
            date: 'Jun 2006 - Jun 2012',
            desc: 'Worked on data input, data management, and electronic data transfer. System back-end (C#, Java).  Created and maintained technology at the back end of a website (the server, database, and application). Collaborated with team to ensure the application development lifecycle phases are propelled into completion. Bulk messaging and emailing. Ensuring database security and integrity. Created custom components for internal framework. Translated design team’s UX wireframes and mock-ups into responsive, interactive features, using HTML/CSS and JavaScript. Designed computer systems, software scopes, and hardware applications as needed within the organization. Collaborate with system engineer to solve complex problems. Tested systems to ensure company is operating efficiently and overseeing service networks to ensure the security of information shared within the company.'
        },
        {
            firm: 'Information Officer, House of Representative Office, Lagos/ Abuja',
            date: 'Jun 2009 - May 2012',
            desc: 'System development and database design and management (IT development task). ICT strategy and implementation. Special duties and social engagement. Communicate critical information effectively to the public. Represented the parliamentarian at the public and official forums and seminars. Maintained and upheld a good image and identity for the representative at the constituency. Maintained positive relationships with media outlets.'
        },
        {
            firm: 'Project Manager at Narconon Nigeria (NGO), Lagos',
            date: 'Jun 2007 - May 2012',
            desc: 'Carried out activity and resource planning. Developed strategies for events and productivity and project lead. Coordinate partnership and corroborate UNODC concepts. Organized and motivated the project team. Controlled activities and time management. Saddled with responsibility of cost estimation and developing the budget. Ensured partners satisfaction and objectives fulfilment. Analysed and managed project risk. Managed reports and necessary documentation.'
        },
        {
            firm: 'System Administrator at Expert Services, Lagos',
            date: 'Jun 2004 - June 2006',
            desc: 'Install, upgrade and monitor software, hardware and networks. Monitoring system performance and troubleshooting issues.'
        },
        {
            firm: 'Hardware Software Technician at YNS Technology, Lagos',
            date: 'Apr 2003 - May 2004',
            desc: 'Support and maintain in-house technology equipment and IT systems. Configuring, diagnosing and repairing hardware equipment and software application to ensure optimal performance.'
        }
    ],
    institutions:[
        {
            school: 'Lund University, Sweden',
            date: 'Aug 2020 - Jun 2021',
            degree: 'Master of Science In Information System'
        },
        {
            school: 'Kristianstad University, Sweden',
            date: 'Aug 2017 - Jun 2020',
            degree: 'Bachelor of Science In Software Development'
        },
        {
            school: 'Kwara State Polytechnic, Nigeria',
            date: 'Sep 2001 - Dec 2003',
            degree: 'Diploma In Computer Science'
        }
       
    ],
    certificates: [
        {
            title: 'Cubersecurity Analyst - IBM',
            date:  'Expected completion date -  November 2024'
        },
        {
            title: 'Azure Certified Solutions Architect Expert',
            date:  'Expected completion date -  August 2024'
        },
        {
            title: 'Data Engineering with Google Cloud',
            date:  'Expected completion date -  September 2022'
        },
        {
            title: 'Digital Marketing Certificate, Google Fundamental Digital Marketing',
            date:  'May 2019'
        }

    ],

    services:[
        {
           title: 'Develop',
           desc: 'I am a software and devops engineer',
           icon: <DeveloperModeIcon/>
        },
        {
            title: 'Analyse',
            desc: 'I am a data and business analyst',
            icon: <ShowChartIcon/>
         },
         {
            title: 'Architecture',
            desc: 'I am a solution architect',
            icon: <CloudIcon/>
         },
         {
            title: 'Administrate',
            desc: 'I am a database administrator',
            icon: <StorageIcon/>
         }
    ],
    skills: [
        {
            title: 'Programming', 
            type: ['Python', 'Java', 'C#', 'JavaScript']    
        },
        {
            title: 'Dev-Framework-Automation', 
            type: ['React.js', 'Vue.js', 'Node.js', '.NET', 'Android Studio', 'Spring Boot & JPA', 'JIRA', 'Jenkins', 'Nagios', 'Selenium']     
        },
        {
            title: 'Database', 
            type: ['MySQL', 'NoSQL', 'MongoDB', 'PostgreSQL', 'DynamoDB', 'Cosmos DB']    
        },
        {
            title: 'Data Engineering', 
            type: ['ETL', 'BigQuery', 'Dataflow', 'Dataprep', 'Cloud Storage', 'Cloud Function', 'SQL', 'Datawarehouse', 'Azure Data Factory', 'Azure Data Lake', 'SSAS', 'Amazon Glue', 'AWS S3', 'Amazon EMR', 'Tensorflow', 'Terraform', 'Ansible', 'CI/CD']    
        },
        {
            title: 'Analytics Tool', 
            type: ['Looker', 'Power BI', 'Qlik', 'KNIME - Machine Learning', 'Excel']    
        },
        {
            title: 'Cloud Computing', 
            type: ['Google Cloud','Azure', 'AWS']    
        }
    ],
    hobbies:[
        {
           title: 'Reading',
           desc: 'I am a software developer',
           icon: <BookIcon/>
        },
        {
            title: 'Chess Game',
            desc: 'I am a data and business analyst',
            icon: <VideogameAssetIcon/>
         },
         {
            title: 'Football',
            desc: 'I am a database administrator',
            icon: <SportsSoccerIcon/>
         },
         {
            title: 'Traveling',
            desc: 'I am a database administrator',
            icon: <ExploreIcon/>
         }
    ],
    portfolio:[
        {
            course: 'Master',
            image: <LundImg/>,
            title: 'Strategic Management & Information System'
        },
        {
            course: 'Master',
            image: <LundImg/>,
            title: 'IT, Innovation & Sustainability'
        },
        {
            course: 'Master',
            image: <LundImg/>,
            title: 'Business Intelligence'
        },
        {
            course: 'Master',
            image: <LundImg/>,
            title: 'Research Methods'
        },
        {
            course: 'Master',
            image: <LundImg/>,
            title: 'Business & Artificial Intelligence'
        },
        {
            course: 'Master',
            image: <LundImg/>,
            title: 'Designing Digitalisation'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Software Development Cloud (C#)'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Software Development Web (JavaScript)'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Fundametal Programming - Java'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Software Engineering 2'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Software Engineering 1'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Database Technique'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Algorithms & Data Structures'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Development For Mobile Platforms'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Entrepreneurship & Innovation'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Network Application'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Computer Security'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Digital Electronic System Design'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Data Communication'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Discrete Mathematics'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Operating System'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Mathematics with Computerbased Application'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Object-Oriented Programming'
        },
        {
            course: 'Bachelor',
            image: <HkrImg/>,
            title: 'Intro Computer Science'
        },
        {
            course: 'Certified',
            image: <CertImg/>,
            title: 'Data Engineering with Google Cloud (On-going)'
        },
        {
            course: 'Certified',
            image: <CertImg/>,
            title: 'Google Fundamental Digital Marketing'
        },
        {
            course: 'Certified',
            image: <CertImg/>,
            title: 'Cybersecurity Analyst - IBM (On-going)'
        },
        {
            course: 'Certified',
            image: <CertImg/>,
            title: 'Azure Certified Solution Architect Expert - Microsoft (On-going)'
        },
        {
            course: 'Project',
            image: <ProjectImg/>,
            title: 'Foodieline App - Course Project'
        },
        {
            course: 'Project',
            image: <ProjectImg/>,
            title: 'HKIF App - Course Project'
        },
        {
            course: 'Project',
            image: <ProjectImg/>,
            title: 'Responsible Citizen App - Course Project'
        },
        {
            course: 'Project',
            image: <ProjectImg/>,
            title: 'SmartHouse App - Course Project'
        },
        {
            course: 'Project',
            image: <ProjectImg/>,
            title: 'Data Training & Modelling - ML Project'
        },
        {
            course: 'Project',
            image: <ProjectImg/>,
            title: 'Data Analysis & Visualization - BI Project'
        },
        {
            course: 'Project',
            image: <ProjectImg/>,
            title: 'Develop Model for Multiple System Integration through API  - Thesis Project with IT Company'
        },
        {
            course: 'Project',
            image: <ProjectImg/>,
            title: 'Data Driven Decision Making Culture in Tourism Management - Thesis Project with National Park'
        }
    ]

};
