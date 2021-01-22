import React  from 'react';
import {useState} from 'react'
import {Document, Page} from 'react-pdf'
import {Typography} from '@material-ui/core';
import profilePicture from '../../assets/Images/profileImage.jpg';
import CustomTimeline from '../Timeline/Timeline';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import CustomButton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

import resumeData from '../../utils/resumeData';
import PDF from '../../utils/CV_Ibrahim_21.pdf'

import './Profile.css';
import TimelineItem from '@material-ui/lab/TimelineItem';
import { CustomTimelineSeparator } from '../Timeline/Timeline';
import TimelineContent from '@material-ui/lab/TimelineContent';

const CustomTimelineItem = ({title, text, link}) => {
    return(

        <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent className='timeline_content'>
            {link ? (<Typography className='timelineItem_text'>
                <span>{title}:</span>{"  "}<a href={link} target="_blank">
                    {text}</a>
            </Typography>) : (<Typography className='timelineItem_text'><span>{title}:</span>{text}</Typography>)}
        </TimelineContent>
    </TimelineItem>
    )
    
};

const CvDownload = () =>{
    return(
        <embed src={PDF} 
        type="application/pdf" 
        style={{height: "800px", width:"500px"}} 
        />
    )
};

const CvDownload_2 = () => {

    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return(
        <div>

    <Document
        file="../../utils/CV_Ibrahim_21.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>

        </div>
    )
};

const Profile = () => {

    return (
        <div className= 'profile container_shadow'>
           <div className= 'profile_name'>
               <Typography className= 'name'>{resumeData.name}</Typography>
               <Typography className= 'title'>{resumeData.title}</Typography>
           </div>
           <figure className= 'profile_img'>
                <img src={profilePicture} alt= "Cant find img"/>
           </figure>
           <div className= 'profile_info'>
               <CustomTimeline  icon= {<PersonOutlineOutlinedIcon/>}>
                      <CustomTimelineItem title= 'Name' text={resumeData.name}/>
                      <CustomTimelineItem title= 'Title' text={resumeData.title}/>
                      <CustomTimelineItem title= 'Phone' text={resumeData.phone}/>
                      <CustomTimelineItem title= 'Email' text={resumeData.email}/>

                      {Object.keys(resumeData.socials).map((key) => (
                          <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
    ))}
                </CustomTimeline>
            <div className='button_container'>

              <a href={PDF} download='Ibrahim_Cv_21' >
              <CustomButton text={'Download Cv'} icon={<GetAppIcon/>} > 
             </CustomButton>
              </a>

            </div>  
           </div>
        </div>
    );
};
export default Profile;