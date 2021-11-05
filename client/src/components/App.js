import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../css/app.css'

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Navbar from './Navbar';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

function App() {
    return (
        <ApolloProvider client={client}>
        <Router>
            <Navbar />
            <Route exact path='/' component={Home}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/Register' component={Register}/>
        </Router>
        </ApolloProvider>
    )
}

export default App;
