export type RouteWrapper = 'landing' | 'withSideBar'

export interface RouteMetaType {
  wrapper: RouteWrapper
}

export interface RouteType {
  path: string
  element: JSX.Element
  meta: RouteMetaType
}
