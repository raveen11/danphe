// import { SHOW_COLOR,GET_COLOR } from "./actionTypes";


// const reducer = (state,action) => {
//     if (action.type === GET_COLOR){
//       let  colors:['red','green','blue','purple','orange','gray','yellow']

//       for(let i=0;i<colors.length;++i){
//         let random = Math.floor((Math.Random() * colors.length));
//         var randomColor=colors[random];
//        }
  
//       return{ colors:randomColor};
//     }
//     return{ 
//         state
//     };
//   };
// export default reducer;



export default function(){
    return ['red','green','blue','purple','orange','gray','yellow']
}