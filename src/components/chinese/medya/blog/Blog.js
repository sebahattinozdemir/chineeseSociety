import Header from "../../header/Header";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React, { useEffect, useState } from "react";
import "./Blog.css";
import db from "./../../../../firebase";
import BlogInterior from "./BlogInterior";
function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // fires once when the app loads
    db.collection("blogs")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setBlogs(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            url:doc.data().url.substring(doc.data().url.lastIndexOf('file')+7, doc.data().url.lastIndexOf('/')),
            content: doc.data().blog_content,
            heading: doc.data().heading,
          }))
        );
      });
  }, []);

  return (
    <div>

      <Header
       
        title="博客"
        icon={<AssignmentIcon style={{ fontSize: "x-large" }} />}
      />
      <div className="row" style={{ paddingTop: "2rem", minHeight:"30rem"}}>
      {blogs.map((blog,index) => (
            <BlogInterior photo = {blog.url} title={blog.heading} uzanti={"/blogs/"+blog.heading} 
            content = {blog} divert={"/blogs/"+blog.heading}  
            />
          ))}
      </div>
    </div>
  );
}

export default Blog;
