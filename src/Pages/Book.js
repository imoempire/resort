import React from "react";
import PropTypes from "prop-types";
import "./booking.css";

function Book({ rooms }) {
  const { name, price } = rooms;
  return (
    <div className="book-form">
      <form>
        {/*  <h1>{name}</h1> */}
        <div></div>
        <h1>Price: ${price}</h1>
        <div className="inputs">
          <div>
            <label htmlFor="">Check In: </label>
            <input
              className="book-input"
              type="date"
              placeholder="check in date"
              value="Check in date"
            />
          </div>
          <div>
            <label htmlFor="">Check Out: </label>
            <input
              className="book-input"
              type="date"
              placeholder="check out date"
              value="Check out date"
            />
          </div>
        </div>
      </form>
      <button className="btn-primary">Book This Room</button>
    </div>
  );
}

Book.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Book;

// import React from "react";
// import "./booking.css";
// import PropTypes from 'prop-types';

// function Book({room}){
//   console.log(room)
//   const {name, price} = room;
//   return (
//     <div className="book-form">
//       <form>
//         <h1>{name}</h1>
//         <div></div>
//         <h1>Price: ${price}</h1>
//         <div className="inputs">
//           <div>
//             <label htmlFor="">Check In: </label>
//             <input
//               className="book-input"
//               type="date"
//               placeholder="check in date"
//               value="Check in date"
//             />
//           </div>
//           <div>
//           <label htmlFor="">Check Out: </label>
//           <input
//             className="book-input"
//             type="date"
//             placeholder="check out date"
//             value="Check out date"
//           />
//           </div>
//         </div>
//       </form>
//       <button className="btn-primary">Book This Room</button>
//     </div>
//   );
// };

// Book.propTypes = {
//   room: PropTypes.shape({
//      name: PropTypes.string.isRequired,
//      price: PropTypes.number .isRequired,
//   }
//   )
// }

// export default Book;
