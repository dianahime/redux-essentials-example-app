import React from 'react'
import {useSelector} from 'react-redux'
import { article } from 'txtgen'
import { Link } from 'react-router-dom'

export const PostList = () => {
  const posts = useSelector(state => state.posts)

  const renderPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0,100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ))
  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  )
}