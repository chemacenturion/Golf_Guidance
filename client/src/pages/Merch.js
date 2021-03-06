import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';



export default function Shop() {

    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "OG Golf Guidance Hat",
            price: "1500",
            image:"https://github.com/chemacenturion/Golf_Guidance/blob/main/client/src/images/hat1.png?raw=true",

        },
        {
            id: 2,
            name: "OG Golf Guidance Polo",
            price: "2500",
            image:"https://github.com/chemacenturion/Golf_Guidance/blob/main/client/src/images/shirt1.png?raw=true",

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
            {products.map(product => (
                <Card className="shadow-sm m-2 p-2" key={product.id}>
                    <Row>
                        <Col>
                            <h5>{product.name}</h5>
                            <p>${product.price/100}.00</p>
                            <div>
                                <button onClick={(e) => {setSelectedProduct(product); handleClick(e)}}  className="btn btn-success">Select</button>
                            </div>
                        </Col>
                        <Col>
                        <img src={product.image} className="card-img" alt={product.name} />
                        </Col>
                    </Row>
                </Card>
            ))}
            </>
        )
    }




    return (
        <div>
            {message ? (
                <Message message={message} />
            ) : (
                <ProductDisplay />
            )}

        </div>
    )
}
