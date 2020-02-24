import React, { Component } from 'react';
import * as Icon from 'react-feather';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: false };
  }

  dropdown = () => {
    console.log("hello");
    this.setState({ dropdown: !this.state.dropdown })
  }

  render() {
    return (
      <div className="navbar">
        
        <div className="nav-bar">
          <a href="#home"><Icon.Camera size={16}/>Groups</a>
          <a href="#news"><Icon.MessageSquare size={16}/>Messages</a>
          <a href="#news"><Icon.Video size={16}/>Video Calls</a>
          <div className="dropdown">
            <button className="dropbtn" onClick={this.dropdown}>Robin Wang ^
            <i className="fa fa-caret-down"></i>
            </button>
            {this.state.dropdown && (<div className="dropdown-content" id="myDropdown" style={{display:"block"}}>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 1</a>
            </div>)}
          </div>
        </div>

      </div>
    );
  }
}

export default Navbar;