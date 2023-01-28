import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ActionTypes } from "../redux/constants/action-types";
class EditBlog extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    let objectLength = Object.keys(this.props.blog).length;
    if (objectLength === 0) {
      document.getElementById("editButton").classList.add("disabled");
      document.getElementById("backButton").classList.add("disabled");
    }
  }
  handleSubmit() {
    let Title = document.getElementById("title").value;
    let Category = document.getElementById("category").value;
    let Description = document.getElementById("description").value;
    if (Title.length > 0 && Category.length > 0 && Description.length > 0) {
      this.props.dispatch({
        type: ActionTypes.EDIT_BLOG,
        payload: {
          id: this.props.blog.id,
          title: Title,
          category: Category,
          description: Description,
          likes: this.props.blog.likes,
        },
      });
      this.props.dispatch({
        type: ActionTypes.SELECTED_BLOG,
        payload: {
          id: this.props.blog.id,
          title: Title,
          category: Category,
          description: Description,
          likes: this.props.blog.likes,
        },
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div
              className="col-4 rounded border"
              style={{
                marginTop: "3%",
                padding: "10px",
                backgroundColor: "#a9f5da",
              }}
            >
              <form>
                <h3 className="text-success" style={{ marginLeft: "35%" }}>
                  Edit Blog
                </h3>
                <div className="mb-2">
                  <label htmlFor="title" className="form-label">
                    Enter Title
                  </label>
                  <input
                    className="form-control"
                    id="title"
                    name="title"
                    type="text"
                    defaultValue={this.props.blog.title}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="category" className="form-label">
                    Enter Category
                  </label>
                  <input
                    className="form-control"
                    id="category"
                    name="category"
                    type="text"
                    defaultValue={this.props.blog.category}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="description" className="form-label">
                    Enter Description
                  </label>
                  <input
                    className="form-control"
                    id="description"
                    name="description"
                    type="text"
                    defaultValue={this.props.blog.description}
                    required
                  />
                </div>
                <Link
                  to={`../blog/${this.props.blog.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <button
                    id="editButton"
                    className="btn btn-primary"
                    style={{ marginLeft: "10%", marginRight: "3%" }}
                    onClick={this.handleSubmit}
                  >
                    Edit Blog
                  </button>
                </Link>
                <Link
                  to={`../blog/${this.props.blog.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <button id="backButton" className="btn btn-warning m-2">
                    Back
                  </button>
                </Link>
                <Link
                  to={`../`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "3%" }}
                  >
                    Back to HomePage
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    blogList: state.blogList,
    blog: state.selectedBlog,
  };
};
export default connect(mapStateToProps)(EditBlog);
