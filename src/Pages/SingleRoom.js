import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import defaultImg from '../images/room-1.jpeg';
import { RoomContext } from '../context';
import StyledCaro from '../Components/caros/StyledCaro';
import BookButton2 from './BookButton2';
import './single.css';

export class SingleRoom extends Component {
   constructor(props) {
      super(props);
      this.state = {
         slug: this.props.match.params.slug,
         defaultImg,
      }  
   }
   componentDidMount(){};
   static contextType = RoomContext;
   render() {
      const {getRoom}=this.context;
      const room = getRoom(this.state.slug);
      if(!room){
         return (<div className="error">
            <h3>No such room could be found</h3>
            <Link to="/rooms" className="btn-primary">
               Back to rooms
            </Link>
         </div>
         );
      }
      const {
         name, description,
         capacity,size,
         price, extras,
         breakfast,pets,
         images } = room;
         const [main, ...defaultImages] = images;
      return (
         <>
         <StyledCaro img={main || this.state.defaultImg}>
            <Banner title={`${name} room`}>
               <Link to="/rooms" className="btn-primary">
                  back to rooms
               </Link>
            </Banner>
         </StyledCaro>
         <section className="single-room">
            <div className="single-room-images">
               {defaultImages.map((item,index)=>{
                  return <img key={index} src={item} alt={name}/>
               })}
            </div>
            <div className="single-room-info">
               <article className="desc">
                  <h3>details</h3>
                  <p>{description}</p>
               </article>
               <article className="info">
                  <h3>info</h3>
                  <h6>price: ${price}</h6>
                  <h6>size: {size} SQFT</h6>
                  <h6>max capacity: 
                       {capacity > 1 ? `${capacity} people` : `${capacity} person` }
                  </h6>
                  <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                  <h6>{breakfast && "free breakfast included" }</h6>
               </article>
            </div>
         </section>
         <section className="room-extras">
            <ul className="extras">
               {extras.map((item, index)=>{
                  return <li key={index}>{item}</li>
               })}
            </ul>
         </section>
        <>
         <section className="booking">
            <BookButton2 room={room} />
         </section>
         </> 
         
         </>
      )
   }
}

export default SingleRoom
