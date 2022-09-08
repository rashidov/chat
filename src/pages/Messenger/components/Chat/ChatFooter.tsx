import React, { FC } from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import SendIcon from '@mui/icons-material/Send'

export const ChatFooter: FC = () => {
  const asd = 'asd'

  return (
    <div className="messenger-chat-footer">
      <div className="messenger-chat-footer-inputMessage">
        <input placeholder="Enter a message..." />
      </div>
      <div className="messenger-chat-footer-actions">
        <EmojiEmotionsIcon />
        <SendIcon />
      </div>
    </div>
  )
}
