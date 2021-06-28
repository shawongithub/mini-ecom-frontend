import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('https://mini-ecom-api.herokuapp.com/api/v1/signup/', {
            username: username,
            password: password
        })
            .then(res => {
                history.push("/login")
                console.log(res)
            }

            )
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
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;