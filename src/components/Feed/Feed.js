import React, { useEffect, useState } from "react";
import db from "../Auth/Firebase/FirebaseConfig";
import Post from "../Feed/Feed";
import QuorBox from "../QuoraBox/QuoraBox";
import "./Feed.css";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // db.collection("questions")
        //     .orderBy("timestamp", "desc")
        //     .onSnapshot((snapshot) =>
        //         setPosts(
        //             snapshot.docs.map((doc) => ({
        //                 id: doc.id,
        //                 questions: doc.data(),
        //             }))
        //         )
        //     );
        let newData = [];
        async function getQuestions(){
          const questionsRef = db.collection("questions");
          const snapshot = await questionsRef.get();
          snapshot.forEach((doc) => {
              console.log(doc.id, "=>", doc.data());
              newData.push(doc.data());
          });
          
          setPosts(newData);
        }
        getQuestions();
    }, []);
    return (
        <div className="feed">
            <QuorBox />
            {posts && posts.map((post) => {
              console.log(post);
              return <Post
                  key={post.id}
                  Id={post.id}
                  question={post.question}
                  imageUrl={post.imageUrl}
                  timestamp={post.timestamp}
                  users={post.user}
              />;
            })}
        </div>
    );
}

export default Feed;
