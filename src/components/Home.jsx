import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect( () => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      console.log(res)
      return res.json();
    })
    .then(data => {
      setBlogs(data);
      setIsPending(false)
    })
  },[])

   
  return (
    <div className="home">
    {isPending && <div>Loading...</div>}  
    {blogs && <Bloglist blogs={blogs} title="All Blogs!"/>}
    {blogs && <Bloglist blogs={blogs.filter( (blog) => blog.author === "Chatty")} title="Chatty's Blogs!"/>}
    </div>
  );
};

export default Home;
