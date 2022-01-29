import React from 'react';
// import './App.css';

const Nav = () => {



 return(
   <div id="menu"> 
  <ol>
      <li>
          <ul>
              <li><a href="#menu"> <button id="company_name"  >Projekt Pierwszy</button>  </a> </li> 
          </ul>
      </li>
      <li> 
          <ul>
              <li><a href="#specialists"><button> O nas </button>  </a> </li>  
               <li> <a href="#about_us"> <button>Oferta</button> </a> </li>
              <li ><a href="#" > <button id="specialButton"  >Kontakt</button> </a> </li> 
          </ul>
       </li>
      
      
  </ol>

</div>
);

};

export default Nav;
