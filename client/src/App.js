import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../css/app.css'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Merch from './pages/Merch';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

function App() {
    return (
        <AuthProvider>
            <ApolloProvider client={client}>
                <Router>
                    <Navbar />
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/Login' component={Login}/>
                    <Route exact path='/Register' component={Register}/>
                    <Route exact path='/Merch' component={Merch}/>
                </Router>
            </ApolloProvider>
        </AuthProvider>
    )
}

export default App;
