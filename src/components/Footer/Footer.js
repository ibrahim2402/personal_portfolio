import { Typography } from '@material-ui/core';
import React from 'react';
import "./Footer.css";
import resumeData from '../../utils/resumeData';

const Footer = () => {

    return(
        <div className='footer'>
            <div className='footer_nametag'>
                <Typography className='footer_name'> {resumeData.name}</Typography>
            </div>
            <div className='footer_copyrighttag'>
                <Typography className='footer_copyright'>
                    Designed by <a href='/' target='_blank'>Kunle</a>
                    <br/>
                    Clone Design from <a href="http://tavonline.net/html/mat/default/index.html" target='_blank'>
                        tavonline</a>
                </Typography>
            </div>
        </div>
    )
}
export default Footer