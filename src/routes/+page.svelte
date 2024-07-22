<script lang="ts">
  import { nanoid } from "nanoid"
  import MessageView from "$lib/components/Message.svelte"
  import type { Id, Message } from "$lib"

  let messages: { [id: Id]: Message } = {}

  function createMessageFrom(parent: Id | null, text: string): Message {
    return {
      id: nanoid(),
      text,
      parent,
      children: [],
    }
  }

  function addMessage(message: Message) {
    messages[message.id] = message

    if (message.parent) {
      messages[message.parent].children.push(message.id)
    }
  }

  function chatFrom(id: Id, count: number = 10): Message[] {
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

  let initial = createMessageFrom(null, "Hello World!")

  let branch1 = createMessageFrom(initial.id, "Branch 1")
  let branch2 = createMessageFrom(initial.id, "Branch 2")

  addMessage(initial)
  addMessage(branch1)
  addMessage(branch2)

  let b1 = branch1.id
  for (let i = 0; i < 10; i++) {
    let m = createMessageFrom(b1, `Message ${i}`)
    b1 = m.id
    addMessage(m)
  }

  let b2 = branch2.id
  for (let i = 0; i < 10; i++) {
    let m = createMessageFrom(b2, `Message ${i}`)
    b2 = m.id
    addMessage(m)
  }

  let currentChat = $state(chatFrom(b1, 15))

  let currentBranchLastId = $derived(currentChat[0].id)

  let textInput: string = $state("")

  function newMessage() {
    console.log({ textInput })
    let message = createMessageFrom(currentBranchLastId, textInput)
    addMessage(message)
    currentChat = chatFrom(message.id, 15)
  }
</script>

<main class="flex flex-col-reverse p-4 gap-4">
  {#each currentChat as message}
    <MessageView value={message}></MessageView>
  {/each}

  <div class="flex flex-row">
    <input type="text" bind:value={textInput} />
    <button onclick={newMessage}>Send</button>
  </div>
</main>
