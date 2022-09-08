import React, { FC } from 'react'
import { MessageTextContentTemplate } from './MessageTextContentTemplate'
import { MessageImageContentTemplate } from './MessageImageContentTemplate'
import { TextOrImageMessageType } from '../testData'

export const MessageWithoutUserInfoTemplate: FC<TextOrImageMessageType> = ({ type, data }) => {
  const currentUser = data.from === 2 // 2 - id current login user

  return (
    <div className={`message-withoutUserInfo ${currentUser && 'currentUser'}`}>
      {type === 'textMessage' && <MessageTextContentTemplate {...data} />}
      {type === 'imageMessage' && <MessageImageContentTemplate {...data} />}
    </div>
  )
}
