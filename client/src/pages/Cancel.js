import React from 'react'
import foreleft from '../images/foreleft.jpg'

const Cancel = () => {
    return (
        <div className="fore-image" >
            <img src={foreleft} alt='fore' />
            <div className="cancel-text"
                style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                    <h1>FORE LEFT!</h1>
                    <h2>Your purchase went out of bounds!</h2>
                    <a href="https://golf-guidance.herokuapp.com/merch"><h3>Click Here to try again!</h3></a>
            </div>
        </div>
    )
}

export default Cancel