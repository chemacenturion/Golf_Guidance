import React from 'react';
import { GET_MERCH } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useState }  from 'react';
// import { Cart } from './Cart';
import { Link } from 'react-router-dom';


const Merch =  (item) => {
    const [state, setState] = useState();
    const { data } = useQuery(GET_MERCH);
   
   

    
    
    const merchandise = data?.merch || []; 
    
    if(!merchandise.length) {
        return<h3>No items at this time</h3>
    }
   console.log(merchandise);
 return (
    
        <div>
            {merchandise && merchandise.map((items) => (
            <div className="row">
                <div className="card" key={items._id}>
                    <p>{items.name}</p>
                    <p>{items.image}</p>
                    <p>{items.description}</p>
                    <p>${items.price}</p>
                    {/* <button className="btn" onClick={Cart}>Add to Cart</button> */}
                    <Link to={`/Cart/${items._id}`}>
                        <button>Add to Cart</button>
                    </Link>

                </div>
                </div>
            ))}
            
        </div>
            
      
   );
};



export default Merch
