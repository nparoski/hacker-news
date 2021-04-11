import React, { useState } from 'react'
import decodeText from '../../helpers/_decodeText'
import { getUser } from '../../services/Api'

export default function Post({ postData }) {
  const [userData, setUserData] = useState({})
  const [isUserDataVisible, setUserDataVisible] = useState(false)

  const fetchUserData = async () => {
    if (postData.by && !Object.keys(userData).length) {
      const data = await getUser(postData.by)

      setUserData(data)
    }
  }

  return (
    <article className="feed__post">
      <p className="feed__title">
        <a
          href={postData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="feed__post-link"
        >
          {postData.title}
        </a>
      </p>
      <p className="feed__meta">
        {postData.score} points by &nbsp;
        <button
          className={`feed__profile ${isUserDataVisible ? 'active' : ''}`}
          onClick={() => {
            setUserDataVisible(!isUserDataVisible)
            fetchUserData()
          }}
        >
          {postData.by}
        </button>
        <button>2 hours ago</button>
        <button>{postData.kids ? postData.kids.length : 0} comments</button>
      </p>
      <div className={`user-profile ${isUserDataVisible ? 'active' : ''}`}>
        <button
          className="user-profile__close"
          onClick={() => setUserDataVisible(!isUserDataVisible)}
        >
          <i className="fas fa-times"></i>
        </button>
        <table>
          <tbody>
            <tr>
              <td>User:</td>
              <td> {userData.id}</td>
            </tr>
            <tr>
              <td>Karma:</td>
              <td> {userData.karma}</td>
            </tr>
            <tr>
              <td>About:</td>
              <td className="user-profile__about">
                {userData.about ? decodeText(userData.about) : 'Empty 👾'}
              </td>
            </tr>
            <tr>
              <td>Recent Activity:</td>
              <td>{}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  )
}
