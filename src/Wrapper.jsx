import React from 'react'

function Wrapper({children,color="green"}) {
  return (
    <div style={{color:color,border:"5px solid green",width:"300px",margin:"10px"}}>
        <h1>Wrapper</h1>
        {children}
    </div>
  )
}

export default Wrapper