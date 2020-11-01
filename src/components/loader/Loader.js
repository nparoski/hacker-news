import React from 'react'

export default function Loader(props) {
  const { progress } = props

  return (
    <div className="loader">
      <div className="loader__bar">
        <div className="loader__progress" style={{ width: `${progress}%` }}>
          <span>Loading ...</span>
        </div>
      </div>
    </div>
  )
}
