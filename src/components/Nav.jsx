import React from 'react';
import './App.css';

const Nav = () => {



  return( <div id="menu"> 
  <ol>
      <li>
          <ul>
              <li><a href="#menu"  ><button id="company_name" style="cursor: default" >Projekt Pierwszy</button>  </a> </li> 
          </ul>
      </li>
      <li>
          <ul>
              <li><a href="#specialists"><button> O nas </button>  </a> </li>  
              <li><a href="#about_us"> <button>Oferta</button> </a> </li>
              <li ><a href="#" > <button style="cursor: not-allowed"  >Kontakt</button> </a> </li>
          </ul>
      </li>
      
      
  </ol>

</div>);
};

export default Nav;
