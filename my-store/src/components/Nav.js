import './Nav.css';
import Grid from '@mui/material/Grid';
import { Link} from "react-router-dom";
function Nav(props){
    return(
         <Grid container spacing={2}>
            <Grid item xs={9}>
                <div className='Line'>
                    <Link className='navBtn' to='/'>Home</Link>
                    <Link className='navBtn' to='/Products'>Products</Link>
                    <Link className='navBtn' to='/About'>About</Link>
                    <Link className='navBtn' to='/Contact'>Contact</Link>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div className='Line'>{props.children}</div>
            </Grid>
         </Grid>
    )
}
export default Nav;