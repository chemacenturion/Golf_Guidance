import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { AuthContext } from '../context/auth'
import { LOGIN_USER } from '../utils/mutations';

const Login = (props) => {
    const context = useContext(AuthContext)
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value});
    }

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData}}){
            context.login(userData)
            props.history.push('/')
        },
        variables: values
    })

    const onSubmit = (event) => {
        event.preventDefault();
        loginUser()
    }

    return (
        <div>
            <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ''}>
                <h1>Login</h1>
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
                        Login
                    </Button>
            </Form>
        </div>
    )
}

export default Login;
