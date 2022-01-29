import React from 'react';
import Juliusz_Słowacki from './Workers/Juliusz_Słowacki';
import Adam_Mickiewicz from './Workers/Adam_Mickiewicz';


const Workers = () => {
  return  (
  <div id="specialists"> 
  <h2>Nasi specjaliści</h2>
  <Adam_Mickiewicz/>     
  <Juliusz_Słowacki/>
</div>
);};

export default Workers;
