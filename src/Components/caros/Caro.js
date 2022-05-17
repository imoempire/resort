import React from 'react'
import './caro.css'

const Caro = ({hero, children}) => {
   return (
      <header className={hero}>
         {children}
      </header>
   )
}

export default Caro;

Caro.defaultProps={
   hero: "defaultHero"
};
