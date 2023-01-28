import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ActionTypes } from "../redux/constants/action-types";
class AddNewBlog extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    let Title = document.getElementById("title").value;
    let Category = document.getElementById("category").value;
    let Description = document.getElementById("description").value;
    if (Title.length > 0 && Category.length > 0 && Description.length > 0) {
      this.props.dispatch({
        type: ActionTypes.ADD_BLOG,
        payload: {
          title: Title,
          category: Category,
          description: Description,
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
                  Add Blog
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
                    required
                  />
                </div>
                <Link
                  to={`../`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: "30%", marginRight: "3%" }}
                    onClick={this.handleSubmit}
                  >
                    Add Blog
                  </button>
                </Link>
                <Link
                  to={`../`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <button className="btn btn-danger">Back</button>
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
export default connect(mapStateToProps)(AddNewBlog);
