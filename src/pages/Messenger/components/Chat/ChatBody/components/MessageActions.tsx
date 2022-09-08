import React, { FC } from 'react'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import ReplyIcon from '@mui/icons-material/Reply'
import AddReactionIcon from '@mui/icons-material/AddReaction'

export const MessageActions: FC = () => {
  const asd = 'asd'

  return (
    <div className="message-actions">
      <QuestionAnswerIcon />
      <ReplyIcon />
      <AddReactionIcon />
    </div>
  )
}
