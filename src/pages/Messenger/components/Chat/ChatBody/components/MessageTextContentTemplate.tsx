import React, { FC } from 'react'
import { MessageActions } from './MessageActions'
import { TextDataTemplate } from '../testData'

export const MessageTextContentTemplate: FC<TextDataTemplate> = ({ text }) => {
  const asd = 'asd'

  return (
    <div className="message-textContent">
      <div className="message-textContent-wrapper">
        <div className="message-textContent-wrapper-text">{text}</div>
        <MessageActions />
      </div>
      {/*<div className="message-textContent-emoji">emoji</div>*/}
    </div>
  )
}
