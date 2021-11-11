import React from 'react'
import {Helmet} from 'react-helmet';

const Success = () => {
    return (
        <div className="success-text"
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >

<Helmet>
                <style>{'body { background-color: purple; }'}</style>
            </Helmet>
            <h1>Your purchase was successful!</h1>
            <h2>Thank you for supporting our development team!</h2>
            <a href="https://golf-guidance.herokuapp.com/merch"><h3>Click Here to continue shopping!</h3></a>
        </div>
    )
}

export default Success