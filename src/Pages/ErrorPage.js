import React from 'react';
import Caro from '../Components/caros/Caro';
import Banner from '../Components/Banner/Banner';
import {Link} from "react-router-dom";

function ErrorPage() {
   return (
      <Caro>
         <Banner tile='404' subtitle='page not page'>
         <Link to="/" className="btn-primary" >
         Go Back To Home
         </Link>
         </Banner>
      </Caro>
   )
}

export default ErrorPage
