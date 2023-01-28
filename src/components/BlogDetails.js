import React from "react";
import { useParams } from "react-router-dom";
import Blog from "./Blog";
function BlogDetails() {
  const { id } = useParams();
  return (
    <div>
      <Blog Id={id} />
    </div>
  );
}
export default BlogDetails;
