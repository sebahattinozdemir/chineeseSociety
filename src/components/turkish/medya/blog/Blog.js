import Header from "../../header/Header";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React, { useEffect, useState } from "react";
import "./Blog.css";
import BlogInterior from "./BlogInterior";

import GenericStore from "../../../../stores/GenericStore";
const GenericService = new GenericStore('blog', 'tr')

function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs()
  }, []);


  const getBlogs = () => {
    GenericService.get()
      .then(async (data) => {
        setBlogs(
          data.map((blog) => ({
            id: blog._id,
            url: blog.photoUrl.replace("?dl=0", "?raw=1"),
            heading: blog.title,
            blogContent: blog.content
          }))
        );
      })
      .catch((err) => {
        console.log(`Oppss ! ${err}`)
      })
  }

  return (
    <div>

      <Header
        subtitle="Blog"
        title="Blog"
        icon={<AssignmentIcon style={{ fontSize: "x-large" }} />}
      />
      <div className="row" style={{ paddingTop: "2rem", minHeight: "30rem" }}>
        {blogs.map((blog, index) => (
          <BlogInterior photo={blog.url} title={blog.heading} uzanti={"/blogs/" + blog.heading}
            content={blog.blogContent} divert={"/blogs/" + blog.heading}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
