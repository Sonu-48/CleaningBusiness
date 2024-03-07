import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { Link } from "react-router-dom";
import { BlogData } from "./BlogData";

const Blogs = () => {
  return (
    <>
      <BreadCrumbs title="Blogs" />
      <div className="blogs-wrapper wrapper">
        <div className="container">
          <div className="row">
            {BlogData &&
              BlogData.map((blogs) => (
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="blog-item" key={blogs.id}>
                    <div className="blog-item-img">
                    <Link to={`/blogs/${blogs.id}`}>
                        <img src={blogs.img} alt={blogs.title} />
                      </Link>
                    </div>
                    <div className="blog-item-content">
                      <Link to={`/blogs/${blogs.id}`}>
                    
                        <h3>{blogs.title}</h3>
                      </Link>
                      <p>{blogs.description.slice(0, 100)}{blogs.description.length > 100 ? '...' : ''}</p>
                      {/* <p>{blogs.description}</p> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
