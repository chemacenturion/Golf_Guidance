import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { gql, useMutation } from '@apollo/client';

const Register = (props) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value});
    }

    const [addUser, { loading }] = useMutation(ADD_USER, {
        update(_, result){
            console.log(result);
            props.history.push('/')
        },
        variables: values
    })

    const onSubmit = (event) => {
        event.preventDefault();
        addUser()
    }

    return (
        <div>
            <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ''}>
                <h1>Register</h1>
                <Form.Input
                    label="Username"
                    placeholder="Username.."
                    name="username"
                    type="text"
                    value={values.username}
                    onChange={onChange}
                    />
                <Form.Input
                    label="Email"
                    placeholder="Email.."
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    />
                <Form.Input
                    label="Password"
                    placeholder="Password.."
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={onChange}
                    />
                    <Button type="submit" secondary>
                        Register
                    </Button>
            </Form>
        </div>
    )
}

const ADD_USER = gql`
mutation addUser(
  $username: String!, 
  $email: String!, 
  $password: String!
  ) {
  addUser(
    username: $username, 
    email: $email, 
    password: $password
    ) {
    token
    user {
      _id
      username
    }
  }
}
`;

export default Register;
