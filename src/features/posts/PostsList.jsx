import React from 'react'
import {useSelector} from 'react-redux'
import { article } from 'txtgen'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'

export const PostList = () => {
  const posts = useSelector(state => state.posts)
  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  const renderPosts = orderedPosts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0,100)}</p>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date}/>
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