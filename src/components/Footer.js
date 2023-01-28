import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer
        className="footer"
        style={{
          bottom: "0px",
          position: "fixed",
          width: "100%",
          height: "8%",
          padding: "5px",
          backgroundColor: "blue",
        }}
      >
        <div className="container text-white">
          <h3 style={{ marginLeft: "36%" }}>
            Made with{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-suit-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
            </svg>{" "}
            by Tarun Kumar
          </h3>
        </div>
      </footer>
    );
  }
}

export default Footer;
