import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { getColor } from "./getAction";


class ReduxProblem extends Component {
    
 render() {
        return (
            <div>
                <h2>The colors are:</h2>
                <button style={{height:'50px',width:'100px',backgroundColor:'red'}} onClick={this.props.getColor}>Click Me</button>
                <button style={{height:'50px',width:'100px',backgroundColor:'green'}} onClick={this.props.getColor}>Click Me</button>
                <button style={{height:'50px',width:'100px',backgroundColor:'blue'}} onClick={this.props.getColor}>Click Me</button>
                <button style={{height:'50px',width:'100px',backgroundColor:'purple'}} onClick={this.props.getColor}>Click Me</button>
                <button style={{height:'50px',width:'100px',backgroundColor:'orange'}} onClick={this.props.getColor}>Click Me</button>
                <br/>
                {this.props.colors.map(item=>{
                    return <a style={{color:this.props.colors}}>{item},</a> 
                })}
                   <br/> 
                {this.props.random.map(str=>{
                    return str
                })}
                
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
          colors:state.colors,
          random:state.random
    };
}

const mapDispatchToProps=dispatch=>{
    return bindActionCreators({getColor:getColor},dispatch)    

}

export default connect(mapStateToProps,mapDispatchToProps) (ReduxProblem);