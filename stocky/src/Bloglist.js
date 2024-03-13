import { useState } from "react";
import { Link } from 'react-router-dom';
const Bloglist = ({blogs,title}) => {
  /* const blogs=want.blogs;
   const title = want.title;
  */
    //console.log(name);
   
    return (  
    <div className="blog-list">
      <h1> {title}</h1>
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <h1> {blog.title}</h1>
                </Link>
                <p>Written by {blog.author}</p>
            </div>
          )
          )}
    </div>
    )
    };
 
export default Bloglist;//  <button onClick={()=> handleClickDelete(titles.id)}>delete blog</button> <h2>{titles}</h2>{blogs.map((titles) => (
      /*<div className="blog-preview" key={titles.id}>
          <h2>{ titles.title}</h2>
          <p> Written by { titles.author}</p>*/

/*const Bloglist = (want) => {
   const blogs=want.blogs;
   const title = want.title;*/ //canbe this too

//we can passing function llike prop
//<button onClick={() => handleDelete(blog.id)}> delete button</button>