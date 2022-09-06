import React, { FC, useState } from 'react'
import { MessengerWidgetBodySearch } from './MessengerWidgetBodySearch'
import { MessengerWidgetBodyChatTemplate } from './MessengerWidgetBodyChatTemplate'

export const MessengerWidgetBody: FC = () => {
  const asd = 'asd'

  const [test, setTest] = useState(false)
  const [number, setNumber] = useState(2)

  const testHandler = () => {
    setTest((prev) => !prev)
    setNumber((prev) => prev + 100)
  }

  return (
    <div className="messengerWidget-body">
      <MessengerWidgetBodySearch />
      <div className="messengerWidget-body-chats">
        <MessengerWidgetBodyChatTemplate
          isTyping={true}
          lastMessage={null}
          name={'Thomas'}
          online={true}
          typingName={'Andy'}
          unreadMessagesLength={number}
          chatType={'user'}
          lastSentMessageIsRead={true}
        />
        <MessengerWidgetBodyChatTemplate
          isTyping={false}
          lastMessage={{ message: 'my new message for you', name: 'Andy', messageType: 'string' }}
          name={'Thomas'}
          online={false}
          typingName={null}
          unreadMessagesLength={0}
          chatType={'group'}
          lastSentMessageIsRead={test}
        />
        <div onClick={testHandler}>asdasd</div>
      </div>
    </div>
  )
}
