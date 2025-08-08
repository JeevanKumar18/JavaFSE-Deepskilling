import React from 'react';

function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!"
    },
    {
      id: 2,
      title: "Installation",
      author: "Schwezdenier",
      content: "You can install React from npm."
    }
  ];

  return (
    <div style={styles.box}>
      <h2>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <strong>{blog.title}</strong>
          <div><em>{blog.author}</em></div>
          <div>{blog.content}</div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  box: {
    padding: '10px',
    minWidth: '200px'
  }
};

export default BlogDetails;