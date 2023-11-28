import './Footer.css';
import Logo from '../assets/pictures/logo.jpg';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Grid container spacing={0}>
            <Grid item xs={3}>
                <div className="footerContainer">
                    <div className="footerLinks">
                        <button className="footerLink"><Link to="/">Home</Link></button>
                        <button className="footerLink"><Link to="/Products">Products</Link></button>
                        <button className="footerLink"><Link to="/About">About</Link></button>
                        <button className="footerLink"><Link to="/Contact">Contact</Link></button>
                    </div>
                    </div>
            </Grid>
            <Grid item xs={3}>
                <div className='footerContact'>
                <div style={{ marginBottom: '30px', paddingTop:'40px'}}>SIGN UP TO RECEIVE EMAIL UPDATES ON SPECIAL PROMOTIONS, NEW PRODUCT ANNOUNCEMENTS, GIFT IDEAS, AND MORE.</div>
                   <input type='text' style={{width: '230px'}}></input>
                   <input type='submit' value="Send Request"></input>
                </div>
            </Grid>
            <Grid item xs={6}>
            <div className='footerLogo'>
            <img src={Logo} alt='' />
            </div>

            </Grid>
    </Grid>
    
  );
}

export default Footer;
