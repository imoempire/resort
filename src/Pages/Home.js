import React from "react";
import Banner from "../Components/Banner/Banner";
import Caro from "../Components/caros/Caro";
import { Link } from "react-router-dom";
import Services from "../Components/Services/Services";
import Featuredrooms from "../Components/Featured/FeaturedRooms";

const Home = () => {
  return (
     <>
    <Caro>
      <Banner title="luxurious rooms"
        subtitle="deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary" >
         Our Rooms
         </Link> 
      </Banner>
    </Caro>
      <Services/>
      <Featuredrooms/>
      </>
  );
};

export default Home;
