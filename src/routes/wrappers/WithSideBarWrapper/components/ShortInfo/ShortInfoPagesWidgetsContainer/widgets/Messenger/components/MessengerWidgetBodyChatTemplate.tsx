import React, { FC } from 'react'
import CreateIcon from '@mui/icons-material/Create'
import avaMen from '../../../../../../../../../assets/images/avaMen.jpg'

interface MessengerWidgetBodyChatTemplateProps {
  name: string
  unreadMessagesLength: number
  online: boolean
  lastMessage: {
    name: string
    message: string
    messageType: 'string' | 'img'
  } | null
  lastSentMessageIsRead: boolean
  isTyping: boolean
  typingName: string | null
  chatType: 'user' | 'group'
}

export const MessengerWidgetBodyChatTemplate: FC<MessengerWidgetBodyChatTemplateProps> = ({
  isTyping,
  typingName,
  name,
  online,
  unreadMessagesLength,
  lastMessage,
  chatType,
  lastSentMessageIsRead,
}) => {
  const isOnlineClass = online ? 'online' : 'offline'
  const isReadClass = lastSentMessageIsRead ? 'read' : 'unread'
  const getSizeContainerUnReadMessagesClass = (): string => {
    if (unreadMessagesLength > 9 && unreadMessagesLength < 99) return 'medium'
    if (unreadMessagesLength > 99) return 'large'
    return ''
  }
  const sizeContainerUnReadMessagesClass = getSizeContainerUnReadMessagesClass()

  return (
    <div className="messengerWidget-body-chats-chatTemplate">
      <div className="messengerWidget-body-chats-chatTemplate-avatar">
        <img src={avaMen} alt="user" />
        {chatType === 'user' && (
          <div className={`messengerWidget-body-chats-chatTemplate-avatar-userStatus ${isOnlineClass}`} />
        )}
      </div>
      <div className="messengerWidget-body-chats-chatTemplate-info">
        <div className="messengerWidget-body-chats-chatTemplate-info-chatName">{name}</div>
        <div className="messengerWidget-body-chats-chatTemplate-info-chatInfo">
          {isTyping && (
            <div className="messengerWidget-body-chats-chatTemplate-info-chatInfo-typing">
              <div className="messengerWidget-body-chats-chatTemplate-info-chatInfo-typing-icon">
                <CreateIcon />
              </div>
              <div className="messengerWidget-body-chats-chatTemplate-info-chatInfo-typing-name">
                {typingName} is typing...
              </div>
            </div>
          )}
          {!isTyping && lastMessage && (
            <div className="messengerWidget-body-chats-chatTemplate-info-chatInfo-lastMessage">
              <div className="messengerWidget-body-chats-chatTemplate-info-chatInfo-lastMessage">
                <div className="messengerWidget-body-chats-chatTemplate-info-chatInfo-lastMessage-name">
                  {lastMessage.name}:
                </div>
                <div className="messengerWidget-body-chats-chatTemplate-info-chatInfo-lastMessage-message">
                  {lastMessage.message}asdasd
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="messengerWidget-body-chats-chatTemplate-indicators">
        {unreadMessagesLength === 0 && (
          <div
            className={`messengerWidget-body-chats-chatTemplate-indicators-lastSentMessageIndicator ${isReadClass}`}
          />
        )}
        {unreadMessagesLength !== 0 && (
          <div
            className={`messengerWidget-body-chats-chatTemplate-indicators-unreadMessagesLength ${sizeContainerUnReadMessagesClass}`}
          >
            {sizeContainerUnReadMessagesClass !== 'large' ? unreadMessagesLength : 99}
          </div>
        )}
      </div>
    </div>
  )
}
