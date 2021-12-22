import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  // form state elements
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  //dispatch Redux
  const dispatch = useDispatch();

  //onChange functions
  const onTitleChanged = (e) => {
    setTitle(e.target.value)
  }

  const onContentChanged = (e) => {
    setContent(e.target.value)
  }

  //form submit behavior
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(), //redux function to generate an id for us
          title,
          content
        })
      )
    //reset the fields
    setTitle('') 
    setContent('')
    }
  }
  
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>Save Post</button>
      </form>
  </section>
  )
}
