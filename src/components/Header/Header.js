import React from 'react'
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, NavLink, withRouter} from 'react-router-dom';
import {HomeRounded, SchoolRounded, WorkRounded, Linkedln, GitHub, Telegram} from '@material-ui/icons';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button'
import './Header.css'


const Header = (props) => {
    const pathName = props?.location?.pathname

    return(
        <Navbar className='header' expand="lg" >
           
           <Nav.Link as={NavLink} to='/home' className={pathName == '/home' ? 'header_link_active' : 'header_link'}>
               <Navbar.Brand className='header_home' icon={<HomeRounded/>}>
                   <HomeRounded/>
               </Navbar.Brand>
           </Nav.Link>
           
        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav className='header_title'>
        
            <Nav.Link as={NavLink} to='/' className={pathName == '/' ? 'header_link_active' : 'header_link'}>
             Resume</Nav.Link>

             <Nav.Link as={NavLink} to='/portfolio' className={pathName == '/portfolio' ? 'header_link_active' : 'header_link'}>
             Portfolio</Nav.Link>

             <Nav.Link as={NavLink} to='/home' className={pathName == '/home' ? 'header_link_active' : 'header_link'}>
             Contact</Nav.Link>
        
         </Nav>

         <div className= 'header_icon'>
            {Object.keys(resumeData.socials).map((key) => (
                <a href={resumeData.socials[key].link} target='_blank'>
                    {resumeData.socials[key].icon}
                </a>
            ))}
            <CustomButton text='Hire Me' icon={<Telegram/>}/>
         </div>
        </Navbar.Collapse>
            
                 
      </Navbar>
    )
}
export default withRouter(Header)