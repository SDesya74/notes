// place files you want to import through the `$lib` alias in this folder.

import { nanoid } from "nanoid"

export type Id = string

export type Message = {
  content: string
  id: Id
  createdAt: number
  parent: Id | null
  children: Id[]
}

export const messages: { [id: Id]: Message } = {}

export function createMessageFrom(parent: Id | null, text: string): Message {
  return {
    id: nanoid(),
    createdAt: Date.now(),
    content: text,
    parent,
    children: [],
  }
}

export function addMessage(message: Message) {
  messages[message.id] = message

  if (message.parent) {
    messages[message.parent].children.push(message.id)
  }
}

export function chatFrom(id: Id, count: number = 10): Message[] {
  let out = []
  let iter_id: Id | null = id
  while (count-- > 0) {
    let message: Message = messages[iter_id!]
    if (!message) break
    iter_id = message.parent
    out.push(message)
  }

  return out
}

export function lastMessage(): Message | null {
  let msgs = Object.values(messages)

  if (msgs.length < 1) {
    return null
  }

  return msgs.reduce((prev, current) =>
    prev.createdAt < current.createdAt ? prev : current
  )
}

// TODO: proper api for message storage
// get roots, get leaves from node, get all nodes with branches (topics)
// store data into localStorage, load data from it, export to json or even make a button to download it
