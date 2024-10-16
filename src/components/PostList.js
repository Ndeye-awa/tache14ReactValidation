import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';

const PostList = () => {
  const { posts, selectPost, isPostSelected } = useContext(PostContext);

  if (isPostSelected) {
    return null; // Masquer la liste si un post est sélectionné
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">Liste des Posts</h1>
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
            <h5 className="mb-0">{post.title}</h5>
            <button 
              className="btn btn-outline-primary"
              onClick={() => selectPost(post.id)}
            >
              Voir détails
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
