import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const AddProduct = () => {
    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')
    const [price, setPrice] = useState('')
    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('https://mini-ecom-api.herokuapp.com/product/api/v1/list/create/', {
            name: name,
            detail: detail,
            price: price
        })
            .then(res => {
                history.push("/shop")
                console.log(res)
            }

            )
            .then(err => console.log(err))
        setName('')
        setDetail('')
        setPrice('')

    }
    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='product name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='detail'>
                    <Form.Label>Detail</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Detail'
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='price'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='set price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddProduct;