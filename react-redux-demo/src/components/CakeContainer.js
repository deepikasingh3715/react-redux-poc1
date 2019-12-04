import React from 'react'
//import { buyCake } from '../reduxCcakes/cakeActions'
import { buyCake } from './reduxC/cakes/cakeActions'
import { connect } from 'react-redux'

function CakeContainer(props){

  return(
   <div>
   <h2>Number of cakes:{ props.numOfCakes }</h2>
   <button onClick={ props.buyCake }>buy cake</button>
   </div>
  )
}

const mapStateToProps = state =>{
  return{
      numOfCakes:state.numOfCakes
  }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: () => dispatch(buyCake())
        //numofCakes:state.numOfCakes
    }
  }


export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)