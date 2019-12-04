import React from 'react'
import { buyIceCream } from './reduxC/iceCream/iceCreamActions'
import { connect } from 'react-redux'

function IceCreamContainer(props){
  return(
   <div>
   <h2>Number of IceCream:{ props.numOfIceCream }</h2>
   <button onClick={ props.buyIceCream }>buy IceCream</button>
   </div>
  )
}

const mapStateToProps = state =>{
  return{
    numOfIceCream:state.numOfIceCream
  }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream: () => dispatch(buyIceCream())       
    }
  }

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)