import React from 'react';
import LinkedlnIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


export default{
    name: 'Kunle Ibrahim',
    title: 'Software | Data Engineer',
    phone: '0736565835',
    email: 'klexy2402@gmail.com',

    socials: {
        Linkedln:{
            link: 'https://se.linkedin.com/',
            text: 'My Linkedln',
            icon: <LinkedlnIcon/>
        },
        Github: {
            link: 'https://github.com/',
            text: 'My GitHub',
            icon: <GitHubIcon/>
        }
    }

};