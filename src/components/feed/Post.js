import React, { useState, useEffect } from 'react'

export default function Post(props) {
  const postData = props.postData;
  const [userData, setUserData] = useState({});
  const [isUserDataVisible, setUserDataVisible] = useState(false);

  useEffect(()=>{
    if(postData){
      fetch(`https://hacker-news.firebaseio.com/v0/user/${postData.by}.json`)
        .then(res => res.json())
        .then(data => setUserData(data))
    }
    },[postData])

  const showLatestPosts = () => {

  }
  
  return (
    <article className="feed__post">
      <p className="feed__title"><a href={postData.url} target="_blank" rel="noopener noreferrer" className="feed__post-link">{postData.title}</a></p>
      <p className="feed__meta">
        {postData.score} points by &nbsp;
        <button className={`feed__profile ${isUserDataVisible ? "active" : ""}`} onClick={()=> setUserDataVisible(!isUserDataVisible)}>
          {postData.by}
        </button>
        <button>2 hours ago</button> 
        <button>hide</button> 
        <button>{postData.kids.length} comments</button>
      </p>
      <div className={`user-profile ${isUserDataVisible ? "active" : ""}`}>
        <button className="user-profile__close" onClick={() => setUserDataVisible(!isUserDataVisible)}>
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
              <td> {userData.about ? userData.about : "Empty 👾"}</td>
            </tr>
            <tr>
              <td>Latest posts:</td>
              <td>
                <ul>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptas?</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam accusantium in sunt obcaecati temporibus.</li>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  )
}
