import React from "react";
import load from '../../images/gif/loading-arrow.gif';

export default function Loading() {
   return (
      <div className="loading">
         <h1>Rooms Loading...!</h1>
         <h1>Please wait...</h1>
         <img src={load} alt="gif" />
      </div>
   )
}
