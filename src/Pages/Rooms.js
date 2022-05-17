import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import Caro from '../Components/caros/Caro';
import RoomContainer from '../Components/RoomContainer/RoomContainer';

const Rooms = () => {
   return (
      <>
      <Caro hero="roomsHero">
         <Banner title="Ours Rooms">
         <Link to="/" className="btn-primary" >
         Return to Home
         </Link>
         </Banner>
      </Caro>
      <RoomContainer/>
      </>
   )
}

export default Rooms;

