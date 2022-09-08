import React, { FC } from 'react'
import { ChatHeader } from './ChatHeader'
import { ChatFooter } from './ChatFooter'
import { ChatBody } from './ChatBody'

interface ChatProps {
  isVisibleDetailsState: boolean
  toggleVisibleChatDetails(): void
}

export const Chat: FC<ChatProps> = ({ isVisibleDetailsState, toggleVisibleChatDetails }) => {
  const asd = 'asd'

  return (
    <div className="messenger-chat">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  )
}
