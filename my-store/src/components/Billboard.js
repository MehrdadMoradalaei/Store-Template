import './Billboard.css';
import C1 from '../assets/pictures/21.jpg';
import C2 from '../assets/pictures/22.jpg';
import C3 from '../assets/pictures/23.jpg';
import C4 from '../assets/pictures/24.jpg';
import C5 from '../assets/pictures/25.jpg';

function Billboard(){
    return(
        <div className='firstPic'>
            <div className='catalogueContainer'>
            <h1>Men's Jackets & Coats</h1>
                <div className='catalogue'><img src={C1} alt=''/></div>
                <div className='catalogue'><img src={C2} alt=''/></div>
                <div className='catalogue'><img src={C3} alt=''/></div>
                <div className='catalogue'><img src={C4} alt=''/></div>
                <div className='catalogue'><img src={C5} alt=''/></div>
            </div>
        </div>
    )
    
}

export default Billboard;
