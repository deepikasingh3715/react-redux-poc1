import { BUY_ICECREAM } from './iceCreamTypes'

const initialState = {
    numOfIceCream:20
}

const buyIceCream = (state = initialState, action) =>{
    switch(action.type){
    case BUY_ICECREAM:return{
      ...state,
      numOfIceCream:state.numOfIceCream-1,    
      info:console.log("numOfIceCreamInit:20"), 
      info:console.log("numOfIceCream:",state.numOfIceCream) 
    }
      default: return state
    }
  }

export default buyIceCream


