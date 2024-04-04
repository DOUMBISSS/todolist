import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';


function Navbar ({search,setSearch}) {
  const [display, setDisplay] = useState(false);
  // const [searchHome,setSearchHome] = useState()
            
  const afficher = () => {
    setDisplay(true)
  }

  const affi = ()=>{
    setDisplay(false)
  }

    return (
      <div>
      <header>
          <div className='navbar'>
          <div className="navbar--left">
            <div className="navbar--logo">
            <Link to="/" className='header__title'><h5>MY <span>TODOLIST</span></h5></Link>
            </div>
          </div>
          <div className="navbar--center">
            <div className="navbar--center--content">
              {/* <Link className='liste' to="/"><p>Accueil</p></Link>
              <Link className='liste' to="/Qui--sommes-nous" ><p>Qui sommes-nous ?</p></Link>
              <Link className='liste' to="/Nos__prestations"><p>Nos prestations</p></Link>
              <Link className='liste' to="/contactez--nous"><p>Contactez-nous</p></Link> */}
            </div>
          </div>
          <div className='navbar--right'>
              <h6>doumbia77fode@gmail.com</h6>
              <Link to="/login"><button className='btn__login'>Connecter</button></Link>
          </div>
         </div>

       
    </header>
          

              </div>
    );
}

export default Navbar;
