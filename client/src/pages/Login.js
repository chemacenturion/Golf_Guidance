import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Container } from 'react-bootstrap'

import Auth from '../utils/auth'
import { LOGIN_USER } from '../utils/mutations';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login] = useMutation(LOGIN_USER);
  
    const onSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
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
              Login
            </Button>
          </Form>
        </Container>
    )
}

export default Login;
