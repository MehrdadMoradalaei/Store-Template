import { red } from '@mui/material/colors';
import './Product.css';

function Product(props){
    return(
    <div className='productContainer'>
    <img className='productImage' src={props.imgSrc} alt={props.pTitle}/>
    <h4>{props.pTitle}</h4>
    </div>
    )
}
export default Product;