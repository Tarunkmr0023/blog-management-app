import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ActionTypes } from "../redux/constants/action-types";
class Blog extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let objectLength = Object.keys(this.props.blog).length;
    if (objectLength === 0) {
      document.getElementById("likeButton").classList.add("disabled");
      document.getElementById("deleteButton").classList.add("disabled");
      document.getElementById("editButton").classList.add("disabled");
    }
  }
  deleteBlog() {
    this.props.dispatch({ type: ActionTypes.REMOVE_SELECTED_BLOG });
    this.props.dispatch({
      type: ActionTypes.DELETE_BLOG,
      payload: { id: this.props.blog.id },
    });
  }
  likeBlog() {
    this.props.dispatch({
      type: ActionTypes.LIKE_BLOG,
      payload: { id: this.props.blog.id },
    });
    this.props.dispatch({
      type: ActionTypes.SELECTED_BLOG,
      payload: {
        id: this.props.blog.id,
        title: this.props.blog.title,
        category: this.props.blog.category,
        description: this.props.blog.description,
        likes: this.props.blog.likes + 1,
      },
    });
    document.getElementById("likeButton").classList.add("disabled");
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-6" style={{ marginTop: "5%" }}>
              <h1 className="text-success" style={{ marginLeft: "30%" }}>
                Blog Details
              </h1>
              <table className="table table-primary table-hover">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "#e61717" }}>
                      Property
                    </th>
                    <th scope="col" style={{ color: "#e61717" }}>
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Title</th>
                    <td style={{ color: "#07aaf5" }} className="fw-bold">
                      {this.props.blog.title ? this.props.blog.title : "NULL"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Category</th>
                    <td style={{ color: "#07aaf5" }} className="fw-bold">
                      {this.props.blog.category
                        ? this.props.blog.category
                        : "NULL"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Description</th>
                    <td style={{ color: "#07aaf5" }} className="fw-bold">
                      {this.props.blog.description
                        ? this.props.blog.description
                        : "NULL"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Likes</th>
                    <td style={{ color: "#07aaf5" }} className="fw-bold">
                      {this.props.blog.likes ? this.props.blog.likes : "NULL"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                id="likeButton"
                className="btn btn-primary"
                style={{ marginLeft: "15%", marginRight: "5%" }}
                onClick={() => this.likeBlog()}
              >
                Like{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-hand-thumbs-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                </svg>
              </button>
              <Link
                to={`../`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <button
                  id="deleteButton"
                  className="btn btn-danger m-2"
                  onClick={() => this.deleteBlog()}
                >
                  Delete{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                  </svg>
                </button>
              </Link>
              <Link
                to={`../editBlog`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "5%",
                  marginRight: "5%",
                }}
              >
                <button id="editButton" className="btn btn-primary m-2">
                  Edit{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                  </svg>
                </button>
              </Link>
              <Link
                to={`../`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <button className="btn btn-warning m-3">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { blog: state.selectedBlog, blogList: state.blogList };
};

export default connect(mapStateToProps)(Blog);
