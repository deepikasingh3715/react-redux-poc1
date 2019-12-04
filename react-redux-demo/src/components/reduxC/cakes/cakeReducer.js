import { BUY_CAKE } from './cakeTypes'

const initalState = {
  numOfCakes:10,
  numOfIceCream:20

}

const cakeReducer  = (state = initalState,action) =>{
  switch(action.type){
   case BUY_CAKE: return{
    ...state,
    numOfCakesInit:state.numOfCakes,
    numOfCakes:state.numOfCakes-1,
    info:console.log("state.numOfCakes:",state.numOfCakes),
  
   }
    default: return state
  }
}

export default cakeReducer