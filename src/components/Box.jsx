import React from 'react';
import boxesInfo from "../data/boxesInfo"
import './App.css';

const Box = () => {

  return(
  <div>
    {boxesInfo.map(({ name, isNew}) => (

      <div class="tile"> <div class="dot" style={isNew ? {display:'none'} : {display:'flex'}}><img src="img/dot.svg"/> </div>
       <span> {name} </span>
        <small> {isNew ? `${name} (nowość)` : {name}} </small> </div> 
    ))}



  </div>
  )
}


export default Box;
