import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';



export default function Shop() {

    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Hat",
            price: "1000"
        },
        {
            id: 2,
            name: "Shirt",
            price: "2000"
        },
        {
            id: 3,
            name: "Glove",
            price: "1000"
        }
    ]);


    const [selectedProduct, setSelectedProduct] = useState({})



    const [message, setMessage] = useState("");


    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                selectedProduct
            )
        });
        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    };



    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);


    const Message = ({ message }) => (
        <section>
            <p>{message}</p>
        </section>
    );

    const ProductDisplay = () => {



        return (
            <>
                <section>
                    <div className="product">
                        <img
                            src="https://i.imgur.com/EHyR2nP.png"
                            alt="The cover of Stubborn Attachments"
                        />
                        <div className="description">
                            <h3>Stubborn Attachments</h3>
                            <h5>$20.00</h5>
                        </div>
                    </div>
                    {/* <form action="/create-checkout-session" method="POST">
                        <button type="submit">
                            Checkout
                        </button>
                    </form> */}
                    <button onClick={e => handleClick(e)}>try me out</button>
                </section>
            </>
        )
    }




    return (
        <div>

            <h1>Welcome to the store</h1>


           <h1> use this credit card number as a test:</h1>
           <p>4242424242424242</p>

            {products.map(product => (
                <Card className="shadow-sm m-2 p-2" key={product.id}>
                    <Row>
                        <Col>
                            <h5>{product.name}</h5>
                            <p>{product.price}</p>
                            <div>
                                <button onClick={() => setSelectedProduct(product)} className="btn btn-success">Select</button>
                            </div>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Card>
            ))}





            {/* Stripe */}
            {message ? (
                <Message message={message} />
            ) : (
                <ProductDisplay />
            )}

        </div>
    )
}
