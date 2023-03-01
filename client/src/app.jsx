// I made all components a .jsx instead of a .js file. This is so we can use the 'rafce' module and make it easier to get started for each component!
import React from 'react'
import Nav from './components/nav/nav'

const app = () => {
  return (
    <div>
      <Nav />
    </div>
  )
}

export default app