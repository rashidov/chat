import React, { FC } from 'react'
import CheckIcon from '@mui/icons-material/Check'

interface WorkspaceListItemProps {
  isActive: boolean
  title: string
  img: any
  isFirst: boolean
}

export const WorkspaceListItem: FC<WorkspaceListItemProps> = ({ isActive, title, img, isFirst }) => {
  return (
    <div
      className={`withSideBarWrapper-shortInfo-workspacesList-workspace ${isActive && 'activeWork'} ${
        isFirst && 'firstWork'
      }`}
    >
      <div className="withSideBarWrapper-shortInfo-workspacesList-workspace-avatar">
        <img src={img} alt="workspace" />
      </div>
      <div className="withSideBarWrapper-shortInfo-workspacesList-workspace-info">{title}</div>
      <div className="withSideBarWrapper-shortInfo-workspacesList-workspace-indicator">{isActive && <CheckIcon />}</div>
    </div>
  )
}
