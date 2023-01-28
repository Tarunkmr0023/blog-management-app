import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ActionTypes } from "../redux/constants/action-types";
class BlogComponent extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  selectBlog(blog) {
    this.props.dispatch({
      type: ActionTypes.SELECTED_BLOG,
      payload: blog,
    });
  }
  render() {
    return (
      <Link
        to={`../blog/${this.props.blog.id}`}
        style={{ textDecoration: "none", color: "#c47c7c" }}
      >
        <div
          className="row"
          style={{
            backgroundColor: "aqua",
            margin: "3%",
            borderRadius: "10px",
            padding: "10px",
          }}
          onClick={() => this.selectBlog(this.props.blog)}
        >
          <div className="col-5 fw-bold">{this.props.blog.title}</div>
          <div className="col-5 fw-bold">{this.props.blog.category}</div>
          <div className="col-2 fw-bold">{this.props.blog.likes}</div>{" "}
        </div>
      </Link>
    );
  }
}

export default connect()(BlogComponent);
