import React from 'react'

export default function Feed(props) {
  
  return (
    <div className="container">
      <main className="feed">
        <article className="feed__post">
          <p className="feed__title"><a href="#" className="feed__post-link">Hacking together a USB-C charger for a cheap Chromebook</a> <a href="#" className="feed__src">(filippo.io)</a></p>
          <p className="feed__meta">
            67 points by <button>laktak</button> <button>2 hours ago</button> <button>hide</button> <button>26 comments</button>
          </p>
        </article>
      </main>
    </div>
  )
}
