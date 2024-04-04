import React, { useEffect } from 'react';
import Navbar from './Navbar';
import {Link, useParams} from 'react-router-dom';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';

export default function Details () {

  const dispatch = useDispatch();
  let id = useParams().id

//   useEffect(() => {
//     fetch(`http://127.0.0.1:5000/products/${id}`)
//     .then((res)=>res.json())
//     .then((article)=>{dispatch(getProduct(article))
//     })
//     }, [id])

    // useEffect(() => {
    //   fetch(`http://127.0.0.1:5000/laptops/${id}`)
    //   .then((res)=>res.json())
    //   .then((laptop)=>{dispatch(getLaptop(laptop))
    //   })
    //   }, [id])

    const addToCart = (id) => {
      dispatch(AddArticle(id))
    }

            
    return (
     <div>
        <Navbar/>
        <div className='container'>

        </div>
        <Footer/>
     </div>
    );
}

