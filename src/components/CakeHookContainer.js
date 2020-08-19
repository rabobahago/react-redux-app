import React from 'react';
import {useSelector} from 'react-redux';

const CakeHookContainer = ()=>{
    const numOfCakes = useSelector(state=>state.numOfCakes);
    return(
        <div>
            <h2>Number of Cakes- {numOfCakes}</h2>
            <button>Buy Cake</button>
        </div>
        
    );
}
export default CakeHookContainer;