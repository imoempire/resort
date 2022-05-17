import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addbook} from '../Reducer/Actions';

const Bookbutton = ({name, price}) => {
   const [inDate, setInDate] = useState('');
   const [outDate, setOutDate] = useState('');

  const handleSubmit=(e)=>{
      e.preventDefault();
      this.props.addbook(this.state);
      setInDate("")
      setOutDate("")
  }

  const handleChange=(e)=>{
   setInDate(e.target.value )
   setOutDate(e.target.value )
};

   return (
      <div>
        <div className="book-form">
      <form onSubmit={handleSubmit}>
         <h1>{name}</h1>
        <div></div>
        <h1>Price: ${price}</h1>
        <div className="inputs">
          <div>
            <label htmlFor="">Check In: </label>
            <input
              className="book-input"
              type="date"
              placeholder="check in date"
              value={inDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Check Out: </label>
            <input
              className="book-input"
              type="date"
              placeholder="check out date"
              value={outDate}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
      <button type="submit" className="btn-primary">Book This Room</button>
    </div> 
      </div>
   );
}

const mapDispatchToProps={
   addbook: addbook,
}

export default connect(null, mapDispatchToProps)(Bookbutton);
