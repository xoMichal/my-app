import React from 'react';
import boxesInfo from "../data/boxesInfo"
// import './App.css';

const Box = () => {

  return(
  <div className="tiles">
    {boxesInfo.map(({id, name, isNew}) => (

      <div key={id} className='tile'> <div className='dot' style={isNew ? {display:"flex"}: {display:"none"}} > </div>
       <span> {name} </span>  
       <small  >
        { isNew ? ("(nowość)") : ("")}
        </small>
       </div> 
    ))}

{/* <div style={isNew ? {display:'none'} : {display:'flex'}} >{isNew ? `${name} (nowość)` : {name}}</div> */}

  </div>
  )
}


export default Box;
