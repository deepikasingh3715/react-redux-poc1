import { BUY_CAKE } from './cakeTypes'
//action creator return action -(is an object having type as a properyty) 
// action =object

export const buyCake = ()=>{
   return{
    type:BUY_CAKE
   }
}