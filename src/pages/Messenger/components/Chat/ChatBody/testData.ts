// users data

export interface UserType {
  id: number
  firstName: string
  lastName: string
  avatarPath: string | null
}

export const testUsers: UserType[] = [
  {
    id: 1,
    firstName: 'Andy',
    lastName: 'Panda',
    avatarPath: null,
  },
  {
    id: 2,
    firstName: 'Thomas',
    lastName: 'Schindler',
    avatarPath: null,
  },
  {
    id: 3,
    firstName: 'Jennifer',
    lastName: 'Connelly',
    avatarPath: null,
  },
]

// messages data

export interface TimeBlockDataTemplate {
  time: string
}

export interface TextDataTemplate {
  text: string
  from: number
  to: number
  time: string
}

export interface ImageDataTemplate {
  images: string[]
  from: number
  to: number
  time: string
}

export interface MessagesTemplates {
  timeBlock: TimeBlockDataTemplate
  textMessage: TextDataTemplate
  imageMessage: ImageDataTemplate
}

export type MessageKeys = keyof MessagesTemplates
export type TextOrImageMessageType = CreateMessage<'textMessage'> | CreateMessage<'imageMessage'>

export interface CreateMessage<Type extends MessageKeys> {
  type: Type
  data: MessagesTemplates[Type]
}

export interface MessagesTypes {
  timeBlock: (args: CreateMessage<'timeBlock'>) => JSX.Element
  withUserInfo: (args: CreateMessage<'textMessage'> | CreateMessage<'imageMessage'>) => JSX.Element
  withoutUserInfo: (args: CreateMessage<'textMessage'> | CreateMessage<'imageMessage'>) => JSX.Element
}

export type CreateMessageType = {
  [p in MessageKeys]: (type: 'text' | 'img') => JSX.Element
}

export type MessagesType = CreateMessage<'timeBlock'> | CreateMessage<'textMessage'> | CreateMessage<'imageMessage'>

export const testMessages: MessagesType[] = [
  {
    type: 'timeBlock',
    data: {
      time: 'today',
    },
  },
  {
    type: 'textMessage',
    data: {
      time: '1m',
      from: 1,
      text: 'Yo! I have a great news for you all. Can I use voice message?',
      to: 2,
    },
  },
  {
    type: 'textMessage',
    data: {
      time: '1m',
      from: 1,
      text: "Oh shit, my microphone doesn't work",
      to: 2,
    },
  },
  // {
  //   type: 'imageMessage',
  //   data: {
  //     time: '1m',
  //     from: 1,
  //     images: [
  //       'https://s16.stc.all.kpcdn.net/russia/wp-content/uploads/2019/01/Altai-.jpg',
  //       'https://natworld.info/wp-content/uploads/2020/04/pustynya-v-namibii.jpg',
  //       // 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg',
  //     ],
  //     to: 2,
  //   },
  // },
  {
    type: 'textMessage',
    data: {
      time: '2m',
      from: 2,
      text: 'Omg',
      to: 1,
    },
  },
  // {
  //   type: 'imageMessage',
  //   data: {
  //     time: '3m',
  //     from: 2,
  //     images: [
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkwXDhQxGVk5wyR3hNvnz7imNvXpZkvCLGw&usqp=CAU',
  //       'https://www.pnp.ru/upload/entities/2022/02/16/17/article/detailPicture/3d/21/28/6a/bfe7975d890bb84d1e764ab564d82796.jpg',
  //       'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg',
  //     ],
  //     to: 1,
  //   },
  // },
  {
    type: 'imageMessage',
    data: {
      time: '..',
      from: 3,
      to: 1,
      images: ['https://i.pinimg.com/originals/8e/59/07/8e5907b3f5af2593dd0eca8898ba2ec2.jpg'],
    },
  },
  {
    type: 'textMessage',
    data: {
      time: '1m',
      from: 3,
      text: 'Your crazy Jenny is back!',
      to: 1,
    },
  },
]
