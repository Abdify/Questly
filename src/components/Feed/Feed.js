import React, { useEffect, useState } from "react";
import db from "../Auth/Firebase/FirebaseConfig";
import Post from "../Post/Post";
import QuorBox from "../QuoraBox/QuoraBox";
import "./Feed.css";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("questions")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        questions: doc.data(),
                    }))
                )
            );

    }, []);

    return (
        <div className="feed">
            <QuorBox />
            {
                posts && posts.map(post => {
                    console.log(post)
                    return (
                        <Post 
                        key={post.id}
                        id={post.id}
                        question={post.questions.question}
                        imageUrl={post.questions.imageUrl}
                        timestamp={post.questions.timestamp}
                        
                         />
                    )
                })
            }
        </div>
    );
}

export default Feed;
