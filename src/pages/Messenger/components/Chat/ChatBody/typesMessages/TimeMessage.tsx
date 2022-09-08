import React, { FC } from 'react'
import { CreateMessage } from '../testData'

export const TimeMessage: FC<CreateMessage<'timeBlock'>> = ({ type, data }) => {
  const asd = 'asd'

  return <div className="message time">{data.time}</div>
}
