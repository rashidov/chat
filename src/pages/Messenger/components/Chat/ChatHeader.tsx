import React, { FC } from 'react'
import GridViewIcon from '@mui/icons-material/GridView'
import ImageIcon from '@mui/icons-material/Image'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import GroupIcon from '@mui/icons-material/Group'

export const ChatHeader: FC = () => {
  const asd = 'asd'

  return (
    <div className="messenger-chat-header">
      <div className="messenger-chat-header-title">
        <GridViewIcon />
        <span className="messenger-chat-header-title-name">Chat name</span>
        <span className="messenger-chat-header-title-quantity">24</span>
      </div>
      <div className="messenger-chat-header-actions">
        <GroupIcon />
        <ImageIcon />
        <SettingsApplicationsIcon />
      </div>
      <div className="messenger-chat-header-users">online users...</div>
    </div>
  )
}
