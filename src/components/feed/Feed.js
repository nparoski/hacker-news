import React, { useEffect, useState } from 'react'
import chunk from '../../helpers/_chunk'
import Post from './Post'

export default function Feed(props) {
  const [postChunks, setPostChunks] = useState([])
  const [postData, setPostData] = useState([])

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/${props.taxonomy}.json`)
      .then((res) => res.json())
      .then((data) => {
        setPostChunks(chunk(data, 25))
      })
  }, [props.taxonomy])

  useEffect(() => {
    if (postChunks.length) {
      postChunks[0].forEach((postId) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`)
          .then((res) => res.json())
          .then((data) => setPostData((state) => [...state, data]))
      })
    }
  }, [postChunks, setPostData])

  const showPosts = (postData) => {
    if (postData) {
      return postData.map((el, i) => (
        <Post key={postData[i].id} postData={postData[i]} />
      ))
    }
  }

  return (
    <div className="container">
      <main className="feed">{showPosts(postData)}</main>
    </div>
  )
}
