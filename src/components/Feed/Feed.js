import React from 'react';
import './Feed.css'
import Post from '../Post/Post';

const Feed = () => {
    return (
        <div className="feed">

            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    );
};

export default Feed;