import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BlogComponent from "./BlogComponent";
class HomePage extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-6" style={{ marginTop: "3%" }}>
            <Link
              to={`/new`}
              style={{
                textDecoration: "none",
                color: "#ff0055",
                marginLeft: "40%",
              }}
            >
              <button className="btn btn-primary m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>{" "}
                Add Blog
              </button>
            </Link>
            <h3 className="text-success" style={{ marginLeft: "42%" }}>
              All Blogs
            </h3>
            {this.props.blogList.map((blog) => (
              <BlogComponent key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    blogList: state.blogList,
    blog: state.selectedBlog,
  };
};
export default connect(mapStateToProps)(HomePage);
