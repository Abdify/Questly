import React from 'react';
import Post from '../Post/Post';
import QuoraBox from '../QuoraBox/QuoraBox';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <QuoraBox />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;