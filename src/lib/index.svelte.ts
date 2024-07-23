import { nanoid } from 'nanoid'

export type Id = string
interface IdProvider {
    next(): Id
}

const NANOID_PROVIDER: IdProvider = {
    next() {
        return nanoid()
    },
}

class IncrementProvider implements IdProvider {
    id = 0
    next() {
        return (this.id++).toString()
    }
}
const INCREMENT_PROVIDER: IdProvider = new IncrementProvider()

export type MessageData = {
    content: string
    createdAt: number
}

export type Message = {
    data: MessageData

    id: Id
    parent: Id | null
    children: Set<Id>
}

export function createMessage(text: string): MessageData {
    return {
        content: text,
        createdAt: Date.now(),
    }
}

class Messages {
    messages: { [id: Id]: Message } = {}

    constructor(private id_provider: IdProvider = NANOID_PROVIDER) {}

    insert(id: Id, message: MessageData) {
        const inner = {
            data: message,
            id,
            children: new Set<Id>(),
            parent: null,
        }

        this.messages[id] = inner
    }

    add(parent: Id | null, message: MessageData): Id {
        const id = this.id_provider.next()

        this.insert(id, message)

        if (parent) this.link(parent, id)

        return id
    }

    get length(): number {
        return Object.keys(this.messages).length
    }

    link(parent: Id, child: Id) {
        this.messages[parent].children.add(child)
        this.messages[child].parent = parent
    }

    chatFrom(id: Id, count: number = 20): Message[] {
        const out = []
        let iter_id: Id | null = id
        while (count-- > 0) {
            const message: Message = this.messages[iter_id!]
            if (!message) break
            iter_id = message.parent
            out.push(message)
        }

        return out
    }

    lastCreatedAt(): Message | null {
        const msgs = Object.values(this.messages)

        if (msgs.length < 1) {
            return null
        }

        return msgs.reduce((prev, current) =>
            prev.data.createdAt > current.data.createdAt ? prev : current
        )
    }

    export(): ExportedMessages {
        const links: ExportedMessages['links'] = {}
        const messages: ExportedMessages['messages'] = {}

        for (const message of Object.values(this.messages)) {
            messages[message.id] = message.data

            if (!message.parent) continue
            links[message.id] = message.parent
        }

        return { links, messages }
    }

    import(exported: ExportedMessages) {
        for (const [id, data] of Object.entries(exported.messages)) {
            this.insert(id, data)
        }

        for (const [child, parent] of Object.entries(exported.links)) {
            this.link(parent, child)
        }
    }

    clear() {
        this.messages = {}
    }
}

export const messages = $state(new Messages(INCREMENT_PROVIDER))

type ExportedMessages = {
    // child to parent map
    links: { [child: Id]: Id }
    messages: { [id: Id]: MessageData }
}

// TODO: proper api for message storage
// get roots, get leaves from node, get all nodes with branches (topics)
// store data into localStorage, load data from it, export to json or even make a button to download it
