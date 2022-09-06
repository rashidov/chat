import React, { FC, useState } from 'react'
import { MessengerWidgetHeader } from './components/MessengerWidgetHeader'
import { MessengerWidgetBody } from './components/MessengerWidgetBody'
import './style.scss'

export const MessengerWidget: FC = () => {
  const [isVisibleMessagesState, setIsVisibleMessagesState] = useState(false)
  const toggleVisibleMessages = () => setIsVisibleMessagesState((prev) => !prev)

  return (
    <div className="messengerWidget">
      <MessengerWidgetHeader
        isVisibleMessagesState={isVisibleMessagesState}
        toggleVisibleMessages={toggleVisibleMessages}
      />
      <MessengerWidgetBody />
      {/*{isVisibleMessagesState && <MessengerWidgetBody />}*/}
    </div>
  )
}
