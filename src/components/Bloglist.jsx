const Bloglist = ({blogs , title}) => {

  return (
    <div className="blog-list">
      <h2 className="blog-heading"> {title} </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blogs.title}</h2>
          <p>
            Written by <em>{blog.author}</em>
          </p>
          <p className="blog-content">{blog.body}</p>
          <button className="blog-btn">
            <a href={blog.link}></a>Read more
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
