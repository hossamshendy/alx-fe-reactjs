// BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* Logic to fetch and display the blog post based on the ID */}
    </div>
  );
};

export default BlogPost;
