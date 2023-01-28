import { ActionTypes } from "../constants/action-types";
let lastId = 2;
let initialState = [
  {
    id: 1,
    title: "Blog1",
    category: "Youtube",
    description: "This is sample blog 1",
    likes: 2,
  },
  {
    id: 2,
    title: "Blog2",
    category: "Instagram",
    description: "This is sample blog 2",
    likes: 4,
  },
];

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BLOG:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          category: action.payload.category,
          description: action.payload.description,
          likes: 0,
        },
      ];

    case ActionTypes.DELETE_BLOG:
      return state.filter((blog) => blog.id !== action.payload.id);
    case ActionTypes.EDIT_BLOG:
      return state.map((blog) =>
        blog.id !== action.payload.id ? blog : action.payload
      );
    case ActionTypes.LIKE_BLOG:
      return state.map((blog) =>
        blog.id !== action.payload.id
          ? blog
          : { ...blog, likes: blog.likes + 1 }
      );
    default:
      return state;
  }
};
export const selectedBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_BLOG:
      return action.payload;
    case ActionTypes.REMOVE_SELECTED_BLOG:
      return {};
    default:
      return state;
  }
};
