import React from 'react'
import Feed from '../components/feed/Feed'
import Page from '../containers/Page'

export default function New() {
  return (
    <Page>
      <Feed taxonomy="newstories" />
    </Page>
  )
}
