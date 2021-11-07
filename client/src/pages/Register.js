import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import {Container, Form, Button } from 'react-bootstrap'
import Auth from '../utils/auth';

function Register(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const onSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
            username: formState.username,
            email: formState.email,
            password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    };
  
    const onChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    return (
      <Container className="mt-5">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              label="Username"
              placeholder="Username.."
              name="username"
              type="text"
              onChange={onChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              label="Email"
              placeholder="Email.."
              name="email"
              type="email"
              onChange={onChange}/>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              label="Password"
              placeholder="Password.."
              name="password"
              type="password"
              onChange={onChange} />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    )
}

export default Register;
