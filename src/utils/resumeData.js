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
import StorageIcon from '@material-ui/icons/Storage';
import LundImg from '../assets/Images/lundUnilogo.jpg'
import HkrImg from '../assets/Images/KristianstadUni_logo.png'
import CertImg from '../assets/Images/cert_logo.png'
import ProjectImg from '../assets/Images/profCert_logo.jpg'


export default{
    name: 'Kunle Ibrahim',
    title: 'Software | Data Engineer',
    phone: '0736565835',
    email: 'klexy2402@gmail.com',
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
    about: 'Experienced in design, implementation, installation, testing and maintenance of software systems. Proficient in different development platforms, programming languages, and information system management. \n\n Experienced with the latest development tools, technologies and procedures. Able to effectively selfmanage during independent projects, as well as collaborate as part of a productive team. \n\n I am good communicator with proven inter-personal skills, highly enthusiastic to learn and undertake new challenges. I speak English as a first language with a working knowledge in Swedish language and possess a full Swedish driving licence class B.',

    employments:[
        {
            firm: 'Cashier/ Assistant at Hubertus Restaurant Stockholm',
            date: 'Aug 2015 - Dec 2016',
            desc: 'Worked productively with Restaurant Team to provide better customer service experience. Effectively service delivery under pressure. Worked to ensure customer satisfaction at all time.'
        },
        {
            firm: 'Local Assistant at EFMAB, Stockholm',
            date: 'Jan 2015 - Jul 2015',
            desc: 'Cleaning and hall management'
        },
        {
            firm: 'Special Assistant, Legislative Arm at Legislator, House of Representative, Lagos/ Abuja',
            date: 'Jun 2009 - May 2012',
            desc: 'Coordinates youth empowerment and development programs. Special duties and social engagement. Successfully managed publicity and enlighten services.'
        },
        {
            firm: 'Production Manager at Narconon Nigeria, Lagos',
            date: 'Jun 2007 - May 2012',
            desc: 'Worked to ensure plans execution and task delivery. Developed strategies for events and productivity. Ensured widely spread campaign for achieving success and effectiveness'
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
            title: 'Data Engineering with Google Cloud',
            date:  ' Expected completion data -  Mar 2021'
        },
        {
            title: 'Digital Marketing Certificate, Google Fundamental Digital Marketing',
            date:  'May 2019'
        }

    ],

    services:[
        {
           title: 'Developer',
           desc: 'I am a software and system developer',
           icon: <DeveloperModeIcon/>
        },
        {
            title: 'Analyst',
            desc: 'I am a data and business analyst',
            icon: <ShowChartIcon/>
         },
         {
            title: 'Database',
            desc: 'I am a database administrator',
            icon: <StorageIcon/>
         }
    ],
    skills: [
        {
            title: 'Programming', 
            type: ['Java', 'C#', 'JavaScript','Python']    
        },
        {
            title: 'Dev-Framework', 
            type: ['React.js', 'Vue.js','Android Studio']     
        },
        {
            title: 'Database', 
            type: ['MySQL', 'NoSQL', 'MongoDB']    
        },
        {
            title: 'Data Engineering', 
            type: [ 'BigQuery', 'Tensorflow', 'GCP']    
        },
        {
            title: 'Analytics Tool', 
            type: ['Power BI', 'Qlik','Excel']    
        },
        {
            title: 'Cloud Computing', 
            type: ['Google Cloud','Azure']    
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
            title: 'Strtegic Management & Information System'
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
            title: 'Data Engineering with Google Cloud'
        },
        {
            course: 'Certified',
            image: <CertImg/>,
            title: 'Google Fundamental Digital Marketing'
        },
        {
            course: 'Projects',
            image: <ProjectImg/>,
            title: 'University Projects'
        }
    ]

};