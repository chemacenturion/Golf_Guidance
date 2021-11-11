import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navigation from './components/Navigation';
import Merch from './pages/Merch';
import Scorecard from './pages/Scorecard';
import Cancel from './pages/Cancel'; 
import Success from './pages/Success'


const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Navigation />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/Login' component={Login}/>
                        <Route exact path='/Register' component={Register}/>
                        <Route exact path='/Merch' component={Merch}/>
                        <Route exact path='/Scorecard' component={Scorecard}/>
                        <Route exact path='/Success' component={Success}/>
                        <Route exact path='/Cancel' component={Cancel}/>
                    </Switch>
            </Router>
        </ApolloProvider>
    )
}

export default App;
