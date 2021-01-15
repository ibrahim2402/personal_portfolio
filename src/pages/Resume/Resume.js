import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CustomTimeline from '../../components/Timeline/Timeline';
import { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

import './Resume.css';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem'

const Resume = () => {

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
                <h6 className=''>Resume</h6>
            </Grid>

            <Grid item xs={12}>
                <Grid container className='resume_timeline'>
                    
                    {/*Job*/}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title='Employment History' icon={<WorkIcon/>}>
                           {resumeData.employments.map((employment) => (
                               <TimelineItem>
                                  <CustomTimelineSeparator/>
                                 <TimelineContent className='timeline_content'>
                                     <Typography className='timeline_firm'>{employment.firm}</Typography>
                                     <Typography  variant="caption" className='timeline_date'>{employment.date}</Typography>
                                     <Typography  variant="body2" className='timeline_desc'>{employment.desc}</Typography>
                                 </TimelineContent>
                               </TimelineItem>
                           ))} 
                        </CustomTimeline>
                    </Grid>
                    
                    {/*Edu*/}
                    <Grid item sm={12} md={6}>
                    <CustomTimeline title='Education' icon={<SchoolIcon/>}>
                           {resumeData.institutions.map((institution) => (
                               <TimelineItem>
                                  <CustomTimelineSeparator/>
                                 <TimelineContent className='timeline_content'>
                                     <Typography className='timeline_firm'>{institution.school}</Typography>
                                     <Typography  variant="caption" className='timeline_date'>{institution.date}</Typography>
                                     <Typography  variant="body2" className='timeline_desc'>{institution.degree}</Typography>
                                 </TimelineContent>
                               </TimelineItem>
                           ))} 
                        </CustomTimeline>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className='section'>

        </Grid>

        <Grid container className='section'>

        </Grid>
        
    </>
        
    )
}
export default Resume