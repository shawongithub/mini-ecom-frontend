import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('https://mini-ecom-api.herokuapp.com/api/v1/login/', {
            username: username,
            password: password
        })
            .then(res => {
                const token = res.data.token
                if (token !== undefined) {
                    window.localStorage.setItem('token', JSON.stringify(token))
                    alert("success")
                }
                else {
                    window.localStorage.setItem('token', JSON.stringify("error"))
                    alert("please enter right credentials")
                }
            })
            .then(err => console.log(err))
        setUsername('')
        setPassword('')

    }

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='username'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    New Customer?{' '}
                    <Link to='/signup'>
                        Register
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default Login;