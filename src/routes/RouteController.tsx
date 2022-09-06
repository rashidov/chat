import { FC } from 'react'
import { RouteType } from './types'
import { Route } from 'react-router-dom'
import { WithSideBarWrapper } from './wrappers'

export const RouteController: FC<RouteType> = ({ element, path, meta }) => {
  const asd = 'asd'

  if (meta.wrapper === 'withSideBar') {
    return <Route path={'/workspace'} element={<WithSideBarWrapper />} />
  }

  return <div>RouteController</div>
}
