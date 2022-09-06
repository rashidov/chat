import React, { FC } from 'react'
import { WorkspaceListItem } from './WorkspaceListItem'
import { AddWorkSpace } from './AddWorkSpace'
import avaMen from '../../../../../../assets/images/avaMen.jpg'
import avaWoman from '../../../../../../assets/images/avaWoman.jpg'

interface WorkspacesListProps {
  isVisibleWorkspacesListState: boolean
}

export const WorkspacesList: FC<WorkspacesListProps> = ({ isVisibleWorkspacesListState }) => {
  return (
    <div className={`withSideBarWrapper-shortInfo-workspacesList ${isVisibleWorkspacesListState ? 'visible' : ''}`}>
      <WorkspaceListItem isActive={true} title={'Thomas'} img={avaMen} isFirst={true} />
      <WorkspaceListItem isActive={false} title={'Stuart Brooks'} img={avaWoman} isFirst={false} />
      <AddWorkSpace />
    </div>
  )
}
