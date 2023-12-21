const Bloglist = ({blogs}) => {

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
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
