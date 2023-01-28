import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed bg-primary">
          <div className="container-fluid d-flex justify-content-center">
            <span className="navbar-brand fs-2 h1 text-white">
              Blog Management App
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
