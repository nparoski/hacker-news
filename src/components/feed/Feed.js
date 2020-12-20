import React, { useEffect, useState } from 'react'
import chunk from '../../helpers/_chunk'
import Post from './Post'
import Loader from '../loader/Loader'
import { getPosts, getPost } from '../../services/Api'

export default function Feed({ taxonomy }) {
  const [postChunks, setPostChunks] = useState([])
  const [postData, setPostData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getPosts(taxonomy)
        setPostChunks(chunk(res, 25))
      } catch (err) {
        setPostChunks([[]])
      }
    })()
  }, [taxonomy, setPostChunks])

  useEffect(() => {
    if (postChunks.length) {
      postChunks[0].forEach((postId) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`)
          .then((res) => res.json())
          .then((data) => {
            setPostData((state) => [...state, data])
          })
      })
      setLoadProgress(100)
      setTimeout(() => {
        setLoading(false)
      }, 500)
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
      <main className="feed">
        {isLoading ? <Loader progress={loadProgress} /> : showPosts(postData)}
      </main>
    </div>
  )
}
