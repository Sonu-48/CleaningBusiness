import React, { useEffect, useState } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import {useParams } from "react-router-dom";
import { BlogData } from "./BlogData";

const SingleBlogs = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState({});
  useEffect(() => {
    // Find the blog in the BlogData array based on the ID
    const foundBlog = BlogData.find((blog) => blog.id === id);

    // Set the found blog to state
    setSingleBlog(foundBlog);
  }, [id]);
  return (
    <>
      <BreadCrumbs title="Blog" subtitle={singleBlog  ? singleBlog.title : ""} />
      {singleBlog && (
        <div className="blogs-wrapper wrapper">
          <div className="container">
            <div className="col-lg-12">
              <div className="single-blog-item">
                <div className="blog-item-img">
                <img src={singleBlog.img} alt={singleBlog.title} />
                </div>
                <div className="single-blog-item-content">
                  <h3>{singleBlog.title}</h3>
                  <p>{singleBlog.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SingleBlogs;
