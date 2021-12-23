import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import { selectUserById } from './usersSlice'
import { selectAllPosts } from '../posts/postsSlice'

export const UsersPage = ({match}) => {

  const {userId} = match.params

  //returns specific user from state
  const user = useSelector(state => selectUserById(state, userId))

  //returns all posts made by the user
  const postsForUser = useSelector( state => {
    const allPosts = selectAllPosts(state)
    return allPosts.filter(post => post.user === userId)
  })

  //what to render
  const postTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))


  return(
    <section>
      <h2>{user.name}</h2>
      <ul>{postTitles}</ul>
  </section>
  )

}