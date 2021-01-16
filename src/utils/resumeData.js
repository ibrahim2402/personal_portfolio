import React from 'react';
import LinkedlnIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';


export default{
    name: 'Kunle Ibrahim',
    title: 'Software | Data Engineer',
    phone: '0736565835',
    email: 'klexy2402@gmail.com',

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
    about: 'Experienced in design implementation, installation, testing and maintenance of software systems. Proficient in different development platforms,programming languages, and information system management. \n\n Experienced with the latest development tools and procedures. Able to effectively selfmanage during independent projects, as well as collaborate as part of a productive team.',

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
            title: 'Digital Marketing Certificate, Google Fundamental Digital Marketing',
            date:  'May 2019'
        },
        {
            title: 'Data Engineering with Google Cloud',
            date:  ' Expected completion data -  Apr 2021'
        }

    ],

    services:[
        {
           title: 'App Dev',
           desc: 'I am a developer',
           icon: <WebOutlinedIcon/>
        },
        {
            title: 'Data Analysis',
            desc: 'I am a data analyst',
            icon: <WebOutlinedIcon/>
         },
         {
            title: 'Database',
            desc: 'I am a database administrator',
            icon: <WebOutlinedIcon/>
         }
    ],
    skills: [
        {
            title: 'Programming', 
            type: ['Java', 'C#', 'JavaScript','Python']    
        },
        {
            title: 'Dev Framework', 
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
            title: 'Analytic Tools', 
            type: ['Power BI', 'Qlik','Excel','Tensorflow']    
        },
        {
            title: 'Cloud Computing', 
            type: ['Google Cloud','Azure']    
        }
    ]

};