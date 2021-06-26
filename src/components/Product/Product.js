import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const Product = (props) => {
    const { name, price, detail, id } = props.product
    return (
        <div className="col-sm-4">
            <Card>
                <CardImg top width="100%" src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardTitle tag="h6">Price : {price}</CardTitle>
                    <CardText>{detail}</CardText>
                    <button onClick={() => props.handleCart(id)}>Add to Cart</button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Product;