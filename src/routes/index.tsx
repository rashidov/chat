import React from 'react'
import { Messenger } from '../pages/Messenger'
import { RouteType } from './types'

export const routes: RouteType[] = [
  {
    path: 'messenger',
    element: <Messenger />,
    meta: {
      wrapper: 'withSideBar',
    },
  },
]
