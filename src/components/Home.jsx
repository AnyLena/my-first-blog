import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "../useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {data && <Bloglist blogs={data} title="All Blogs!" />}
      {data && (
        <Bloglist
          blogs={data.filter((blog) => blog.author === "Chatty")}
          title="Chatty's Blogs!"
        />
      )}
    </div>
  );
};

export default Home;
