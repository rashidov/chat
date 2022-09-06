import React, { FC } from 'react'
import AddIcon from '@mui/icons-material/Add'

export const AddWorkSpace: FC = () => {
  return (
    <div className="withSideBarWrapper-shortInfo-workspacesList-addWorkspace">
      <div className="withSideBarWrapper-shortInfo-workspacesList-addWorkspace-icon">
        <AddIcon />
      </div>
      <span>Create new workspace</span>
    </div>
  )
}
