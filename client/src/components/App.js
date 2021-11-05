import React from 'react'
import '../css/app.css'
import CourseData from './CourseData'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
        <>
        <div>Hello World! This is project 3!</div>
        <CourseData />
        </>
        </ApolloProvider>
    )
}

export default App
