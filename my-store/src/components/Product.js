import './Product.css';

function Product(props){
    return(
    <div className='productContainer'>
        <div className='productImage' style={{backgroundImage: `url(${props.imgSrc})`, backgroundSize:`cover`}}>
            <div className='addBtn'>

            </div>
        </div>
    <h4>{props.pTitle}</h4>
    <h6>{props.pDescription}</h6>
    </div>
    );
}
export default Product;
