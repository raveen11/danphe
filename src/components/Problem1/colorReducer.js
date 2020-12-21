import { GET_COLOR } from "./actionTypes";





const reducer=(state=[],action)=>{
    switch(action.type){
    case GET_COLOR:
        return{
            randomColor:action.payload           
        }
    default:
        return state
    }
}

export  default reducer

