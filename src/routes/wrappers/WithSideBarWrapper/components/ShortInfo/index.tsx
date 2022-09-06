import React, { FC, useState } from 'react'
import { ActiveWorkspaceInfo } from './components/ActiveWorkspaceInfo'
import { WorkspacesList } from './components/WorkspacesList'
import { ShortInfoPagesWidgetsContainer } from './ShortInfoPagesWidgetsContainer'

export const ShortInfo: FC = () => {
  const [isVisibleWorkspacesListState, setIsVisibleWorkspacesListSate] = useState(false)
  const toggleVisibleWorkspacesList = () => setIsVisibleWorkspacesListSate((prev) => !prev)

  return (
    <div className="withSideBarWrapper-shortInfo">
      <ActiveWorkspaceInfo
        isVisibleWorkspacesListState={isVisibleWorkspacesListState}
        toggleVisibleWorkspacesList={toggleVisibleWorkspacesList}
      />
      <WorkspacesList isVisibleWorkspacesListState={isVisibleWorkspacesListState} />
      <ShortInfoPagesWidgetsContainer />
    </div>
  )
}
