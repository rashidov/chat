import React, { FC } from 'react'
import { MessageTextContentTemplate } from './MessageTextContentTemplate'
import { MessageImageContentTemplate } from './MessageImageContentTemplate'
import { testUsers, TextOrImageMessageType } from '../testData'

export const MessageWithUserInfoTemplate: FC<TextOrImageMessageType> = ({ type, data }) => {
  const fromUser = testUsers.find((user) => user.id === data.from)
  const currentUser = fromUser?.id === 2 // 2 - id current login user

  return (
    <div className={`message-withUserInfo ${currentUser && 'currentUser'}`}>
      <div className="message-withUserInfo-avatar">
        {fromUser?.firstName[0].toUpperCase()}
        {fromUser?.lastName[0].toUpperCase()}
      </div>
      <div className="message-withUserInfo-body">
        <div className="message-withUserInfo-body-subInfo">
          <div className="message-withUserInfo-body-subInfo-name">
            {!currentUser && fromUser?.firstName} {!currentUser && fromUser?.lastName}
            {currentUser && 'You'}
          </div>
          <div className="message-withUserInfo-body-subInfo-time">{data.time}</div>
        </div>
        {type === 'textMessage' && <MessageTextContentTemplate {...data} />}
        {type === 'imageMessage' && <MessageImageContentTemplate {...data} />}
      </div>
    </div>
  )
}
