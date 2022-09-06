import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const Content: FC = () => {
  const asd = 'asd'
  return (
    <div className="withSideBarWrapper-content">
      <Outlet />
    </div>
  )
}
