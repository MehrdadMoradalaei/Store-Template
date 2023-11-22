import './Products.css';
import Product from './Product';
import p1 from '../assets/pictures/1.jpg';
import p2 from '../assets/pictures/2.jpg';
import p3 from '../assets/pictures/3.jpg';
import p4 from '../assets/pictures/4.jpg';
import p5 from '../assets/pictures/5.jpg';
import p6 from '../assets/pictures/6.jpg';
import p7 from '../assets/pictures/7.jpg';
import p8 from '../assets/pictures/8.jpg';


function Products(){
    return(
        <div>
            <Product imgSrc={p1} pTitle="Polo Jacke"/>
            <Product imgSrc={p2} pTitle="Polo Jacke"/>
            <Product imgSrc={p3} pTitle="Polo Jacke"/>
            <Product imgSrc={p4} pTitle="Polo Jacke"/>
            <Product imgSrc={p5} pTitle="Polo Jacke"/>
            <Product imgSrc={p6} pTitle="Polo Jacke"/>
            <Product imgSrc={p7} pTitle="Polo Jacke"/>
            <Product imgSrc={p8} pTitle="Polo Jacke"/>
        </div>
    )
}

export default Products;