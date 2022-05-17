import React from 'react';
import './banner.css';

const Banner = ({children, title, subtitle}) => {
   return (
      <div className="banner">
         <h1>{title}</h1>
         <div></div>
         {children}
      </div>
   );
}

export default Banner;
