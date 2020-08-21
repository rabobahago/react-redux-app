import { BUY_ICECREAM } from './iceCreamTypes';

const initialState = {
    numOfIceCreams: 400
}

const buyIceCream = (state = initialState, action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams - 2
            }
        default:
            return state
    }
}
export default buyIceCream;