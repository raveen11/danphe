import {GET_COLOR,SHOW_RED } from "./actionTypes";


export const getColor = (dispatch, getState) => {
    const colors = ['red','green','blue','purple','orange','gray','yellow']
    for(let i=0;i<colors.length;++i){
    let random = Math.floor((Math.random() * colors.length));
     var randomColor=colors[random];
    }       
    return (dispatch)=>{
        dispatch({
            
      type: GET_COLOR,
      payload: { randomColor }
       });
    }
  };
  