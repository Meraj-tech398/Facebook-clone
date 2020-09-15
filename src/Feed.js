import React, { useEffect, useState } from 'react'
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender" 
import "./Feed.css"
import Post from "./Post"
import db from "./firebase"

function Feed() {

    const [ posts , setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id : doc.id , data : doc.data()})))
        ))
      
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                key={posts.id}
                profilePic={posts.data.profilePic}
                message={posts.data.message}
                timeStamp={posts.data.timeStamp}
                username={posts.data.username}
                image={posts.data.image}
            />

        </div>
    )
}

export default Feed