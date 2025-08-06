import React from 'react';

const Blogs = React.forwardRef(({ blogs }, ref) => {
  return (
    <section id="blogs" ref={ref} className="section section-bg-white">
      <div className="section-container">
        <h2 className="section-title">Blogs</h2>
        <div className="blogs-grid">
          {blogs.map((blog, idx) => (
            <a key={idx} href={blog.url} target="_blank" rel="noopener noreferrer" className="blog-card">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-platform">Published on {blog.platform}</p>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-link">Read More</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Blogs;