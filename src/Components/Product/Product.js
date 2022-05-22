import React from 'react';
import './Product.css';
import {Card , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
    const { handleAddToCart } = props;
    const {img, name, price} = props.product;
    return (
        <div className="product">
            <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src= {img} />
            <Card.Body>
                <Card.Title className='product-name'>{name}</Card.Title>
                <Card.Text>
                Build a life which is less of a hassle by incorporating machines that make living a lot easier
                </Card.Text>
                <h6>${price}</h6>
                <Button onClick={() =>props.handleAddToCart(props.product)} className='btn-cart' variant="primary">
                    <span className='btn'>Add to Cart</span>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </Button>
            </Card.Body>
            </Card>
        </div>
    );
};   

export default Product; 