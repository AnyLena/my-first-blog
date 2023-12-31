import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null)
      })
      .catch((err) => {
        setIsPending(false)
        setError(err.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
      {blogs && (
        <Bloglist
          blogs={blogs.filter((blog) => blog.author === "Chatty")}
          title="Chatty's Blogs!"
        />
      )}
    </div>
  );
};

export default Home;
