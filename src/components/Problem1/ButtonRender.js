import React, { useState } from 'react'


function ButtonRender(props) {
    const [add,setadd]=useState(0);
    return (
        <div>
            <button style={{backgroundColor:'purple',fontSize:'20px',margin:'80px'}} onClick={()=>setadd(add+1)}>Click Me</button>
            <br/>
            Your final no is : {add}
        </div>
    )
}

export default ButtonRender

