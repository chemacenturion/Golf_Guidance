import React from 'react'
import { GET_MERCH_BY_ID } from '../utils/queries'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';


const Cart = () => {
const { id } = useParams()
const { data, error } = useQuery(GET_MERCH_BY_ID, { 
    variables: {ID: id },
})
const itemInCart = data?.merchById || []; 

console.log(id)
console.log(data)
if (itemInCart) {




return (
    <div>
        <p>{itemInCart.name}</p>
        <p>{itemInCart.description}</p>
        <p>{itemInCart.image}</p>
        <p>{itemInCart.price}</p>
        <p>{itemInCart.quantity}</p>
    </div>
)
}
}

export default Cart; 