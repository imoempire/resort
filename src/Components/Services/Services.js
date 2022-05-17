import React, { Component } from "react";
import Title from "../Title";
import "./services.css";

class Services extends Component {
  state = {
    services: [
      {
        icon: <span className="iconify" data-icon="fa-solid:cocktail" style={{color: '#af9a7d'}} data-width="40"></span>,
        title: "free cocktails",
        info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsam consequuntur labore dolores quae maiores sapiente voluptatum sed doloremque doloribus laboriosam aspernatur, possimus odio voluptas earum itaque! Perferendis, tenetur animi.",
      },
      {
         icon: <span className="iconify" data-icon="ic:outline-hiking" style={{color: '#af9a7d'}} data-width="40"></span>,
         title: "Endless Hiking",
         info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsam consequuntur labore dolores quae maiores sapiente voluptatum sed doloremque doloribus laboriosam aspernatur, possimus odio voluptas earum itaque! Perferendis, tenetur animi.",
       },
       {
         icon: <span className="iconify"  data-icon="fa-solid:shuttle-van" style={{color: '#af9a7d'}} data-width="40"></span>,
         title: "free Stuttle",
         info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsam consequuntur labore dolores quae maiores sapiente voluptatum sed doloremque doloribus laboriosam aspernatur, possimus odio voluptas earum itaque! Perferendis, tenetur animi.",
       },
       {
         icon: <span className="iconify" data-icon="bx:bx-beer" style={{color: '#af9a7d'}} data-width="30"></span>,
         title: "Strongest Beer",
         info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsam consequuntur labore dolores quae maiores sapiente voluptatum sed doloremque doloribus laboriosam aspernatur, possimus odio voluptas earum itaque! Perferendis, tenetur animi.",
       },
    ],
  };
  render() {
    return (
      <div className="services">
        <Title title="services" />
        <div className="services-center">
            {this.state.services.map((item, index)=>{
               return <article className="service" key={index}>
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
               </article>
            })}
        </div>
      </div>
    );
  }
}

export default Services;
