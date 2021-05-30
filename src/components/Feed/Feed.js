import React, { useEffect, useState } from "react";
import db from "../Auth/Firebase/FirebaseConfig";
import Post from "../Feed/Feed";
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
            {posts.map(({ id, questions }) => (
                <Post
                    key={id}
                    Id={id}
                    question={questions.question}
                    imageUrl={questions.imageUrl}
                    timestamp={questions.timestamp}
                    users={questions.user}
                />
            ))}
        </div>
    );
}

export default Feed;
