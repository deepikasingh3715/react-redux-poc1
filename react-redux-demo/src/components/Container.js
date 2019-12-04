import React,{Component} from 'react'
import { buyIceCream } from './reduxC/iceCream/iceCreamActions'
import { buyCake } from './reduxC/cakes/cakeActions'
import { connect } from 'react-redux'


// function Container(props){
// //class Container extends Component{
//   return(
//   <div>     
//    <h2>Number of iceCream in store:{ props.numOfIceCream }</h2>
//    <button onClick={ props.buyIceCream }>buy iceCream</button>
   
//    <h2>Number of cakes in store:{ props.numOfCakes }</h2> 
//    <button onClick={ props.buyCake }>buy cake</button>  
//   </div> 
//   )
// }

class Container extends Component{
  constructor(props)
  {
    super(props);
  }

  render(){
    return (
      <div>     
        <h2>Number of iceCream in store:{ this.props.numOfIceCream }</h2>
        <button onClick={ this.props.buyIceCream }>buy iceCream</button>
        
        <h2>Number of cakes in store:{ this.props.numOfCakes }</h2> 
        <button onClick={ this.props.buyCake }>buy cake</button>  
      </div> 
    )
  }
}


const mapStateToProps = state =>{
  return{
      numOfIceCream:state.iceCreamReducer.numOfIceCream,
     // numOfIceCreamInit:state.numOfIceCreamInit,
      numOfCakes:state.cakeReducer.numOfCakes,    
  }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: () => dispatch(buyCake()),
        buyIceCream: () => dispatch(buyIceCream())     
    }
  }

  /*export default compose(
    connect(
      state => ({
        buyCake: buyCake(state)  ,
        buyIceCream:buyIceCream(state)
    }),
    buyIceCream,
    )
  )(Container);

*/
export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(Container)
//export default Container