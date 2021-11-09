import React from 'react'
import { GET_MERCH } from '../utils/queries';
import { useQuery } from '@apollo/client';


const Merch = function Merchandise() {

    const { loading, data, error } = useQuery(GET_MERCH);
    const merch = data?.merch || []; 

   if (loading) return 'loading...';
   if (error) return `Error! ${error.message}`;

   return (
       <div>Check out our Merchandise!
       {merch.map(item => (
          <div>{merch.name}</div>
       ))}
       </div>
   );
}



export default Merch
