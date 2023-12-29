import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Learning HTML and CSS",
      body: "Are you interested in building your own websites? Learning HTML and CSS is a great place to start. These two coding languages are the foundation of web development, allowing you to create the structure and style of your web pages. With just a few lines of code, you can design beautiful layouts, add images and videos, and create user-friendly navigation. There are plenty of online resources available to help you get started with learning HTML and CSS, so don't be intimidated! With some practice and dedication, you'll be well on your way to becoming a web development pro.",
      author: "Chatty",
      id: "1",
      link: "#blog1",
    },
    {
      title: "Learning Javascript",
      body: "Javascript is an essential programming language for anyone looking to become a skilled web developer. It allows for dynamic content on websites, interactive forms, smooth animations, and much more. If you're new to coding or have experience with other languages like HTML or CSS, learning Javascript may seem daunting at first. However, there are many tutorials available online that can help break down the concepts into manageable chunks. By dedicating time each day to practice writing code in Javascript, you'll soon find yourself feeling more confident in your abilities as a developer.",
      author: "Betty",
      id: "2",
      link: "#blog2",
    },
    {
      title: "Learning React",
      body: "React has become one of the most popular JavaScript libraries for building user interfaces in recent years. Whether you're looking to enhance your front-end development skills or dive deeper into creating interactive web applications, learning React can open up new opportunities for growth in your career as a developer. While it may take some time getting used to its component-based architecture at first glance , once mastered it becomes an invaluable tool that simplifies complex UIs while providing better performance overall . There are numerous online courses , tutorials ,and documentation available that will guide beginners through understanding how React works from scratch all the way up until they feel comfortable enough using it independently . Don't hesitate - start learning React today!",
      author: "Chatty",
      id: "3",
      link: "#blog3",
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter( (blog) => blog.id !== id)
    setBlogs(newBlogs);

  }

  return (
    <div className="home">
    <Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
    <Bloglist blogs={blogs.filter( (blog) => blog.author === "Chatty")} title="Chatty's Blogs!"/>
    </div>
  );
};

export default Home;
