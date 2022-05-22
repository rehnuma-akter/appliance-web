import React from 'react';

const Product = (props) => {
    const {img, name, id, price} = props.product;
    console.log(props.product);
    console.log(img);
    return (
        <div>
            <img src= {img} alt="img" />
            <p> name: {name}</p>
            <p>price: ${price}</p>
            <p><small>id: {id}</small></p>
        </div>
    );
};

export default Product;