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
        // let newData = [];
        // async function getQuestions(){
        //   const questionsRef = db.collection("questions");
        //   const snapshot = await questionsRef.get();
        //   snapshot.forEach((doc) => {
        //       console.log(doc.id, "=>", doc.data());
        //       newData.push(doc.data());
        //   });
          
        //   setPosts(newData);
        // }
        // getQuestions();
    }, []);
    // const usersInfoRef = db.collection("questions");
    // const [posts] = useCollectionData(usersInfoRef, { idField: "id" });

    return (
        <div className="feed">
            <QuorBox />
            {
                posts && posts.map(post => {
                    return (
                        <Post 
                        id={post.id}
                        question={post.question}
                        imageUrl={post.imageUrl}
                        timestamp={post.timestamp}
                        
                         />
                    )
                })
            }
        </div>
    );
}

export default Feed;
