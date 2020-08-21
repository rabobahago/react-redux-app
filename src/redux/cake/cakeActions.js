import {BUY_CAKE} from './cakeTypes';

export const buyCake = (number=10)=>{
    return{
        type: BUY_CAKE, 
        payload:number
    }
}