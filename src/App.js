import React from 'react';
import { PostProvider } from './context/PostContext';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <PostProvider>
      <div className="App">
        <PostList />
        <PostDetail />
      </div>
    </PostProvider>
  );
}

export default App;
