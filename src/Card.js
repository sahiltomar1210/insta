import React from 'react'
import "./Component/Card/Card.css"
const Card = ({post}) => {
  return (
    <>
      <section className="card">
        <section className="card-header">
            <div>
                 <div className="card-header-name">{post.name}</div>
                 <div className="card-header-location">{post.location}</div>
            </div>
            <span>
            <i className="fa fa-ellipsis-h" ></i>
            </span>
        </section>
        <section className="card-image">
            <img src={require("" + post.PostImage)} alt="place"/>
        </section>
        <section className="card-actions">
            
          <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
          <span><i className="fa fa-paper-plane-o" aria-hidden="true"></i></span>
          <span></span>
          <span>{post.date}</span>
        </section>

        <section className="post-likes">
          {post.likes} likes
        </section>
        <section className="post-description">
          {post.description}
        </section>
      </section>
    </>
  )
}

export default Card;
