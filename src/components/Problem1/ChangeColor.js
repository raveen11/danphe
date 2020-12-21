import React, { Component } from 'react';

var colors=['red','green','blue','black','orange'];

class ChangeColor extends Component {
    constructor(props) {
        super(props);
        this.state={
            bgcolor:''
        }
        this.changeMyColor = this.changeMyColor.bind(this);

    }

    
      changeMyColor(){
        for(var i=0;i<colors.length;i++){

            var random=Math.floor(Math.random() * colors.length);
            var randomColors=colors[random];
           


 
        }
        
            if(this.state.bgcolor==='blue'){
                // randomArr.push('green');

                this.setState({
                    bgcolor:'green'
            
                })
                
            }
            
        else{
            this.setState({
                bgcolor:randomColors
            }) 
          
    
    
        }


            }
  
    render() {

        return (
            <div>
                My color choices are :
                {colors.map((item,index)=>{
                    return <div>{item}</div>
                })}

<br/>

                <button style={{fontSize:'30px',height:'300px',width:'300px',backgroundColor:this.state.bgcolor}} onClick={this.changeMyColor}>Change My color</button>
                
            </div>
        );
    }
}

export default ChangeColor;