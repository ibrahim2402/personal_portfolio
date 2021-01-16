import React from 'react';
import {Grid, Icon, Paper, Typography} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CustomTimeline from '../../components/Timeline/Timeline';
import { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import CardMembershipIcon from '@material-ui/icons/CardMembership';


import './Resume.css';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineDot from '@material-ui/lab/TimelineDot';

const Resume = () => {

    return(
     <>
        
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

                        <CustomTimeline title='Certification' icon={<CardMembershipIcon/>}>
                           {resumeData.certificates.map((certificate) => (
                               <TimelineItem>
                                  <CustomTimelineSeparator/>
                                 <TimelineContent className='timeline_content'>
                                     <Typography className='timeline_firm'>{certificate.title}</Typography>
                                     <Typography  variant="caption" className='timeline_date'>{certificate.date}</Typography>
                                     
                                 </TimelineContent>
                               </TimelineItem>
                           ))} 
                        </CustomTimeline>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container className='section'>
        <Grid item className='section_title marginbottom_abtme'>
                <span></span>
                <h6 className=''>My Service</h6>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={3} justify='space-around'>
                    {resumeData.services.map((service) => (
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='service'>
                                <Icon className='service_icon'>{service.icon}</Icon>
                                <Typography className='service_title' variant='h6'>{service.title}</Typography>
                                <Typography className='service_desc' variant='body2'>{service.desc}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>

            </Grid>
        </Grid>

        <Grid container className='section bgcolor'>
        <Grid item className='section_title marginbottom_abtme'>
                <span></span>
                <h6 className=''>Skills</h6>
            </Grid>
            <Grid item xs={12}>
            <Grid container spacing={3} justify='space-around'> 
            {resumeData.skills.map((skill) => (
               <Grid xs={12} sm={3} md={3}>
                   <Paper elevation={0} className='skill'>
                        <Typography variant='h8' className='skill_title'>{skill.title}</Typography>
                        {skill.type.map((level) => (
                          <Typography variant='body2' className='skill_type'>
                              <TimelineDot variant={'outlined'} className='timeline_dot'/>
                              {level}
                          </Typography>  
                        ))}
                   </Paper>
               </Grid> 
            ))}
            </Grid>
            </Grid>
        </Grid>

        <Grid container className='section'>

        </Grid>
        
    </>
        
    )
}
export default Resume