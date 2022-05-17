import React, { Component } from "react";
import "./booking.css";
import { RoomContext } from "../context";
import {addbook} from '../Reducer/Actions'
import { connect } from "react-redux";

export class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      bookings: [
        { 
          inDate: "",
          outDate: "",
          
        },
        {
          name: props.room.name || "",
          price: props.room.price || "",
        }
      ]
    }
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addbook(this.state)
    this.setState({
      inDate: '',
      outDate: '',
    })
   console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="book-form">
            <h1>{this.state.bookings[1].name}</h1>
            <h1>Price: ${this.state.bookings[1].price}</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="inputs">
              <div>
                <label htmlFor="">Check In: </label>
                <input
                  className="book-input"
                  type="date"
                  name="inDate"
                  placeholder="check in date"
                  value={this.state.inDate}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="">Check Out: </label>
                <input
                  className="book-input"
                  type="date"
                  name="outDate"
                  placeholder="check out date"
                  value={this.state.outDate}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          <button type="submit" className="btn-primary">
            Book This Room
          </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps={
  addbook: addbook
}

export default connect(null, mapDispatchToProps)(Book);
