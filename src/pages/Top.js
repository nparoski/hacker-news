import React from 'react'
import Feed from '../components/feed/Feed'
import Page from '../containers/Page'

export default function Top() {
  return (
    <Page>
      <Feed taxonomy="topstories" />
    </Page>
  )
}
