import React, { Component } from 'react';
import { RoomContext } from '../../context';
import Title from '../Title';
import Room from '../Room/Room';
import Loading from '../Loader/Loading';
import './featured.css';

export default class Featuredrooms extends Component {
   static contextType = RoomContext;
   render() {
      let { loading ,featuredRooms: rooms } = 
      this.context;
      rooms = rooms.map(room =>{
         return <Room key={room.id} room={room} />
      })
      return (
         <section className="featured-rooms">
            <Title title="featured rooms" />
            <div className="featured-rooms-center">
               {loading?<Loading/>:rooms}
            </div>
         </section>
      );
   }
}

