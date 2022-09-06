import React, { FC } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddCommentIcon from '@mui/icons-material/AddComment'

interface MessengerWidgetHeaderProps {
  isVisibleMessagesState: boolean
  toggleVisibleMessages(): void
}

export const MessengerWidgetHeader: FC<MessengerWidgetHeaderProps> = ({
  isVisibleMessagesState,
  toggleVisibleMessages,
}) => {
  return (
    <div className="messengerWidget-header">
      <div className="messengerWidget-header-title">
        <div className="messengerWidget-header-title-text">Messages</div>
        <div className="messengerWidget-header-title-indicator"></div>
        <div className="messengerWidget-header-title-icon" onClick={toggleVisibleMessages}>
          {isVisibleMessagesState ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      <div className="messengerWidget-header-actions">
        <AddCommentIcon />
      </div>
    </div>
  )
}
