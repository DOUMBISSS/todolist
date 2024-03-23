import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';

export default function Accueil () {
    const dispatch = useDispatch()


    return (
      <div>
        <Navbar/>
       <div className='container'>
        <div className='main--part--container'>

        </div>
       </div>
            
          <Footer/>
        </div>

    );
}

