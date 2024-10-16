import React, { createContext, useState, useEffect } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostSelected, setIsPostSelected] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  const selectPost = (postId) => {
    const post = posts.find(p => p.id === postId);
    setSelectedPost(post);
    setIsPostSelected(true);
  };

  const goBackToList = () => {
    setSelectedPost(null);
    setIsPostSelected(false);
  };

  return (
    <PostContext.Provider value={{ posts, selectedPost, isPostSelected, selectPost, goBackToList }}>
      {children}
    </PostContext.Provider>
  );
};
