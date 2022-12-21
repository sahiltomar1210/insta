import React, { useEffect, useState } from 'react'
import Card from "../../Card";
import Header from "../Header/Header"


import "./Post-view.css"

const PostView = () => {
    const[posts, setPosts] = useState([]);

    useEffect(()=>{
      fetch('https://api.jsonbin.io/v3/b/63a2a6a9dfc68e59d56d8eb4/latest', {
        method: 'GET',
        headers: {
            'X-Master-Key':'$2b$10$PxAyfYRwvxBYPaHAfXV1puqzsO3U9Mcc0Zl3u44CqzpOdyS07RGSG',
            'X-Access-Key':'$2b$10$yWqhrNTN5PSX9slzND0Ad.uV0IMQ3JV39Z8vlHE/N3P9uMXI8zRdG',
            'X-Bin-Meta':'false'
          }
        }).then((res)=>res.json()).then((data)=>{
            setPosts(data.data);
        }).catch((err)=>{
            if(err){
                console.log(err);            }
        })
    }, []) 
  return (
    <>
    <Header />
      <div className='post-container'>
        {posts.map((post, i) => {
            return(
                <>
                <Card post={post} key={i} />
                </>
                
            )
        })}
      </div>
    </>
  )
}

export default PostView;
