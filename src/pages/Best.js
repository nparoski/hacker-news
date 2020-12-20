import React from 'react'
import Feed from '../components/feed/Feed'
import Page from '../containers/Page'

export default function Best() {
  return (
    <Page>
      <Feed taxonomy="beststories" />
    </Page>
  )
}
