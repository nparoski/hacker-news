import React, { Fragment } from 'react'
import Navbar from '../components/navbar/Navbar'

export default function Page({ children }) {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  )
}
