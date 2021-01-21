import React from 'react'
import {CardActionArea, Card, CardContent, CardMedia, Grid, Grow, Tab, Tabs, Typography} from '@material-ui/core'
import {useState} from 'react'
import './Portfolio.css'
import resumeData from '../../utils/resumeData';



const Portfolio = () => {

    const [tabValue, setTabValue] = useState('All');

    return(
    <Grid  container className='section paddingbottom_abtme paddingtop_abtme'>
        <Grid item className='section_title marginbottom_abtme'>
                <span></span>
                <h6 className=''>Portfolio</h6>
        </Grid>
        <Grid item xs={12}>
          <Tabs value={tabValue} indicatorColor='white' 

             className='customTab' onChange={(event, newValue) => setTabValue(newValue)}>
             
             <Tab label='All' value='All' className={ 
                 tabValue == 'All' ? 'customTab_item active' : 'customTab_item'}/>
                
                {[...new Set(resumeData.portfolio.map((item) => item.course))].map((course) => 
                (
                   <Tab label={course} value={course} className={
                       tabValue == course ? 'customTab_item active' : 'customTab_item'}/>
                ))}
        </Tabs>
        </Grid> 
        <Grid item xs={12}>
            <Grid container spacing={2}>
                {resumeData.portfolio.map((portfolio) => (
            <>
            {tabValue == portfolio.course || tabValue == 'All' ? (
                <Grid item>
                <Grow in timeout={1000}>
                    <Card className='customCard'>
                        <CardActionArea>
                            <CardMedia className='customCard_img' image={portfolio.image}/>
                            <CardContent>
                                <Typography className='customCard_course'>{portfolio.course}</Typography>
                                <Typography variant='caption' className='customCard_title'>{portfolio.title}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grow>                  
            </Grid>
            ) : null}
                  
            </>
              
                ))}
            </Grid>
        </Grid>


        </Grid>
    )
}
export default  Portfolio