import React, { FC } from 'react'
import { MessageActions } from './MessageActions'
import { ImageDataTemplate } from '../testData'

export const MessageImageContentTemplate: FC<ImageDataTemplate> = ({ images }) => {
  const asd = 'asd'

  return (
    <div className="message-imgContent">
      <div className="message-imgContent-wrapper">
        <div className="message-imgContent-wrapper-images">
          {images.slice(0, 2).map((image) => (
            <div key={image} className="message-imgContent-wrapper-images-image">
              <img src={image} alt="message" />
            </div>
          ))}
          {images.length > 2 && (
            <div className="message-imgContent-wrapper-images-otherImages">
              <span className="message-imgContent-wrapper-images-otherImages-quantity">+2</span>
              <span className="message-imgContent-wrapper-images-otherImages-note">click to open all the pictures</span>
            </div>
          )}
        </div>
        <MessageActions />
      </div>
      {/*<div className="message-imgContent-emoji">emoji</div>*/}
    </div>
  )
}
