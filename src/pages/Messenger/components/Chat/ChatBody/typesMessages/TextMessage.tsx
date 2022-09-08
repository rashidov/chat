import React, { FC } from 'react'

const MessageHeader: FC = () => {
  const asd = 'asd'

  return (
    <div className="message text-content-header">
      <div className="message text-content-header-name">Name</div>
      <div className="message text-content-header-time">4m</div>
    </div>
  )
}

interface MessageBodyProps {
  isFirst: boolean
  isReply: boolean
}

export const MessageBody: FC<MessageBodyProps> = ({ isFirst, isReply }) => {
  const asd = 'asd'

  return (
    <div className="message text-content-body">
      <div className="message text-content-body-message">message</div>
      {isReply && <div className="message text-content-body-replyInfo">reply inf</div>}
    </div>
  )
}

export const TextMessage: FC = () => {
  const asd = 'asd'

  return (
    <div className="message text">
      <div className="message text-avatar">ava</div>
      <div className="message text-content">
        <MessageHeader />
        <MessageBody isFirst={false} isReply={false} />

        {/*<div className="message text-content-footer">emoji</div>*/}
      </div>
    </div>
  )
}
