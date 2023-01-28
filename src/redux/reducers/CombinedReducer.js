import { combineReducers } from "redux";
import { blogReducer, selectedBlogReducer } from "./BlogReducer";
const reducers = combineReducers({
  blogList: blogReducer,
  selectedBlog: selectedBlogReducer,
});
export default reducers;
