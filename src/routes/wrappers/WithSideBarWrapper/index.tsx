import React from 'react'
import { ShortInfo, NavBar, Content } from './components'
import './style.scss'

export const WithSideBarWrapper: React.FC = () => {
  const asd = 'asd'

  return (
    <div className="withSideBarWrapper">
      <NavBar />
      <ShortInfo />
      <Content />
    </div>
  )
}
