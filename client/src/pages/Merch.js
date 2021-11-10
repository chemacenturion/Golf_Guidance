import React from 'react'
import { GET_MERCH } from '../utils/queries';
import { useQuery } from '@apollo/client';


const Merch =  () => {
    const { loading, data, error } = useQuery(GET_MERCH);
    const merchandise = data?.merch || []; 
    if(!merchandise.length) {
        return<h3>No items at this time</h3>
    }
   
 return (
    
            <div>
            {merchandise && merchandise.map((items) => (
            <div key={items._id}>
                <p>{items.name}</p>
                <p>{items.image}</p>
                <p>{items.description}</p>
                <p>${items.price}</p>
                
            </div>
                
            ))}
            </div>
      
   );
};



export default Merch
