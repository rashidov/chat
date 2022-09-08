import React, { FC } from 'react'
import { TimeMessage } from './typesMessages/TimeMessage'
import { MessageWithUserInfoTemplate } from './components/MessageWithUserInfoTemplate'
import { MessageWithoutUserInfoTemplate } from './components/MessageWithoutUserInfoTemplate'
import { testMessages, MessagesTypes, CreateMessage, TextOrImageMessageType } from './testData'
import './style.scss'

const messageTypes: MessagesTypes = {
  timeBlock: (props) => <TimeMessage {...props} />,
  withUserInfo: (props) => <MessageWithUserInfoTemplate {...props} />,
  withoutUserInfo: (props) => <MessageWithoutUserInfoTemplate {...props} />,
}

export const ChatBody: FC = () => {
  const asd = 'asd'

  return (
    <div className="messenger-chat-body">
      {testMessages.map((message, index) => {
        if (index === 0) {
          if (message.type === 'timeBlock') return messageTypes.timeBlock(message)
          return messageTypes.withUserInfo(message)
        }

        if (message.type === 'timeBlock') return messageTypes.timeBlock(message)

        if (testMessages[index - 1].type === 'textMessage' || testMessages[index - 1].type === 'imageMessage') {
          const prevMessage = testMessages[index - 1] as TextOrImageMessageType
          if (prevMessage.data.from === message.data.from) return messageTypes.withoutUserInfo(message)
        }

        return messageTypes.withUserInfo(message)
      })}
    </div>
  )
}
