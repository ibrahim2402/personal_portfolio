import React from 'react';

import './Home.css';

import {Grid, Typography} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CustomTimeline from '../../components/Timeline/Timeline';
import { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';


import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem'


const Home = () => {

    return(
        <>
        <Grid container className='section paddingbottom_abtme'>
            <Grid item className='section_title marginbottom_abtme'>
                <span></span>
                <h6 className=''>About Me</h6>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
            </Grid>
        </Grid>
        <Grid container className='section'>
        <Grid item className='section_title marginbottom_abtme'>
                <span></span>
                <h6 className=''>Hobbies</h6>
            </Grid>

           
        </Grid>
        <Grid container className='section'>

        </Grid>

        <Grid container className='section'>

        </Grid>
        
    </>
    );
}
export default Home;