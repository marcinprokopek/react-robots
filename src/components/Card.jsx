import { useState, useEffect } from 'react';
import './Card.css';

const Card = ({id, name, email}) =>{

    return(
<div className=' card bg-mid-gray  pa3 br3 ma2 grow bw2 shadow-5'>
    
    <img src={`https://robohash.org/${id}?200x200`} alt="photo" />
    <div>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
</div>

    )
}

export default Card;