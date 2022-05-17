import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export class Navbar extends Component {
  state = {isopen: false,};

  handleToggle = () => {
    this.setState({ isopen: !this.state.isopen });
  };
  
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <span
                className="iconify"
                data-icon="noto-v1:beach-with-umbrella"
                data-width="70"> 
              </span>
            </Link>
            <button type="button" className="nav-btn"
              onClick={this.handleToggle}>
              <span className="iconify" data-icon="gg:menu-boxed"  data-width="50"></span>
            </button>
          </div>
          <ul className={this.state.isopen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
