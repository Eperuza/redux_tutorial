import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { ReactionButtons } from './ReactionButtons'
import { selectAllPosts, fetchPosts } from './postsSlice'
import { Spinner } from '../../components/Spinner'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'

const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  )
}

export const PostsList = () =>  {

  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  //async
  const postStatus = useSelector(state => state.posts.status)
  const error = useSelector(state => state.posts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  //variable name for the content that we'll render depending on the postStatus (loading, success ...)
  let content;

  if (postStatus === 'loading') {
    content = <Spinner text="Loading..." />
  }

  else if (postStatus === 'succeeded') {

    //slice to make copy of posts as .sort() mutates the array which we don't want to do with state
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    
    content = orderedPosts.map(post => (
        <PostExcerpt key = {post.id} post = {post}/>
    ))
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}
