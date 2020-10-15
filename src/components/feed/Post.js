import React from 'react'

export default function Post(props) {
  const data = props.data;

  return (
    <article className="feed__post">
      <p className="feed__title"><a href={data.url} target="_blank" rel="noopener noreferrer" className="feed__post-link">{data.title}</a> <a href="https://google.com" className="feed__src">(filippo.io)</a></p>
      <p className="feed__meta">
        {data.score} points by <button>{data.by}</button> <button>2 hours ago</button> <button>hide</button> <button>{data.kids.length} comments</button>
      </p>
    </article>
  )
}
