import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

function Product(props){
    return(
    <div className='productContainer'>
        <div className='productImage' style={{backgroundImage: `url(${props.imgSrc})`, backgroundSize:`cover`}}>
            <div className='addBtn'>
            <FontAwesomeIcon icon={faCartArrowDown} style={{ paddingTop: '30%', fontSize: '2em' }} />
                            </div>
        </div>
    <h3>{props.pTitle}</h3>
    <h6>{props.pDescription}</h6>
    <h6>{props.pDescription2}</h6>
    
    </div>
    );
}
export default Product;
