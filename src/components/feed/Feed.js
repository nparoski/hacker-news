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
        const data = await getPosts(taxonomy)
        setPostChunks(chunk(data, 25))
      } catch (err) {
        setPostChunks([[]])
      }
    })()
  }, [taxonomy, setPostChunks])

  useEffect(() => {
    if (postChunks.length) {
      postChunks[0].forEach(async (postId) => {
        try {
          const data = await getPost(postId)
          setPostData((state) => [...state, data])
        } catch (err) {
          console.log(err)
        }
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
