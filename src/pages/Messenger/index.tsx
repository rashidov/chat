import React, { FC, useState } from 'react'
import './style.scss'
import { Chat } from './components/Chat'
import { ChatDetails } from './components/ChatDetails'

export const Messenger: FC = () => {
  const [isVisibleDetailsState, setIsVisibleDetailsState] = useState(true)
  const toggleVisibleChatDetails = () => setIsVisibleDetailsState((prev) => !prev)

  return (
    <div className="messenger">
      <Chat isVisibleDetailsState={isVisibleDetailsState} toggleVisibleChatDetails={toggleVisibleChatDetails} />
      <ChatDetails />
    </div>
  )
}
