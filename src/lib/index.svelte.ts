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
    transform: {
        position: {
            x: number
            y: number
        }
        width: number
        height: number
    }
}

export interface IMessage {
    data: MessageData

    id: Id
    parent: Id | null
    children: Set<Id>
}

export function createMessage(text: string): MessageData {
    // TODO: Choose transform for a new message
    return {
        content: text,
        createdAt: Date.now(),
    }
}

class Messages {
    inner: { [id: Id]: IMessage } = $state({})

    constructor(private id_provider: IdProvider = NANOID_PROVIDER) {}

    get(id: Id): IMessage | null {
        return this.inner[id] ?? null
    }

    insert(id: Id, message: MessageData) {
        const inner = {
            data: message,
            id,
            children: new Set<Id>(),
            parent: null,
        }

        this.inner[id] = inner
    }

    add(parent: Id | null, message: MessageData): Id {
        const id = this.id_provider.next()

        this.insert(id, message)

        if (parent) this.link(parent, id)

        return id
    }

    delete(id: Id) {
        const message = this.inner[id]
        if (!message) return
        if (message.children.size > 0 && message.parent) {
            message.children.forEach((child) => {
                this.link(message.parent!, child)
            })
        }
        if (message.parent) this.unlink(message.parent, id)
        delete this.inner[id]
    }

    edit(id: Id, newContent: string) {
        const message = this.inner[id]
        if (!message) return

        message.data.content = newContent
    }

    get length(): number {
        return Object.keys(this.inner).length
    }

    link(parent: Id, child: Id) {
        this.inner[parent].children.add(child)
        this.inner[child].parent = parent
    }

    unlink(parent: Id, child: Id) {
        this.inner[parent].children.delete(child)
        this.inner[child].parent = null
    }

    isLeaf(id: Id): boolean {
        return this.inner[id].children.size === 0
    }

    chatFrom(id: Id, count: number = 20): IMessage[] {
        const out = []
        let iter_id: Id | null = id
        while (count-- > 0) {
            const message: IMessage = this.inner[iter_id!]
            if (!message) break
            iter_id = message.parent
            out.push(message)
        }

        return out
    }

    untilBranchOrLeaf(id: Id): Id {
        let iter_id: Id | null = id

        while (iter_id) {
            const message: IMessage = this.inner[iter_id!]
            if (!message) break
            if (message.children.size !== 1) break
            const firstChild = message.children.values().next().value
            iter_id = firstChild
        }

        return iter_id!
    }

    lastCreatedAt(): IMessage | null {
        const msgs = Object.values(this.inner)

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

        for (const message of Object.values(this.inner)) {
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

    updateTransform(
        id: Id,
        position: { x: number; y: number },
        width: number,
        height: number
    ) {
        const message = this.inner[id]
        if (message) {
            message.data.transform = { position, width, height }
        } else {
            console.error(`Message with id ${id} does not exist.`)
        }
    }

    clear() {
        this.inner = {}
    }
}

export const messages = new Messages(NANOID_PROVIDER)

type ExportedMessages = {
    // child to parent map
    links: { [child: Id]: Id }
    messages: { [id: Id]: MessageData }
}

// TODO: proper api for message storage
// get roots, get leaves from node, get all nodes with branches (topics)
// store data into localStorage, load data from it, export to json or even make a button to download it
