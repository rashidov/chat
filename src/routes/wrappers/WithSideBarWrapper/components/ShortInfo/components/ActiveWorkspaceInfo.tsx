import React, { FC, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import avaMen from '../../../../../../assets/images/avaMen.jpg'

interface ActiveWorkspaceInfoProps {
  isVisibleWorkspacesListState: boolean
  toggleVisibleWorkspacesList(): void
}

export const ActiveWorkspaceInfo: FC<ActiveWorkspaceInfoProps> = ({
  isVisibleWorkspacesListState,
  toggleVisibleWorkspacesList,
}) => {
  return (
    <div className="withSideBarWrapper-shortInfo-workspaceInfo">
      <div className="withSideBarWrapper-shortInfo-workspaceInfo-avatar">
        <div className="withSideBarWrapper-shortInfo-workspaceInfo-avatar-indicator" />
        <img src={avaMen} alt="workspace" />
      </div>
      <div className="withSideBarWrapper-shortInfo-workspaceInfo-selectWorkBtn" onClick={toggleVisibleWorkspacesList}>
        <QuestionAnswerIcon className="selectWorkQuestionIcon" />
        <span>All</span>
        {isVisibleWorkspacesListState ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
    </div>
  )
}
