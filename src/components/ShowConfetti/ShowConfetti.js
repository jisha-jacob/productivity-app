import React from 'react';
import Confetti from 'react-confetti';

const showConfetti=(props) =>{
 console.log(props.list);   
if (props.list===1)
{    
        return <Confetti width='700'  height='700'/>
}
else 
 return null
}

export default showConfetti;