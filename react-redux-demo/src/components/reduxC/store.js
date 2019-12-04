import {createStore,combineReducers} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
//const store = createStore(cakeReducer)


const rootReducer =  combineReducers ({
    iceCreamReducer,
    cakeReducer
    
  })
console.log("rootReducer.prototype:",rootReducer.prototype)

const store = createStore(rootReducer) 
//const store = createStore(iceCreamReducer) 
console.log("store.getState():",store.getState())


export default store