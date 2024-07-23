<script lang="ts">
  import MessageView from "$lib/components/Message.svelte"
  import {
    addMessage,
    chatFrom,
    createMessageFrom,
    lastMessage,
    type Id,
  } from "$lib/index.svelte"
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import { browser } from "$app/environment"

  let last = lastMessage()

  if (browser && $page.url.hash === "" && last !== null) {
    let url = $page.url
    url.hash = last.id
    console.log("got hash", url.hash)
    goto(url)
    // TODO: Show a 404 page when a message with last id was not found
  }

  let currentChat = $state(last ? chatFrom(last.id, 15) : [])
  let currentBranchLastId = $derived(currentChat[0]?.id ?? null)

  let textInput = $state("")
  let textInputElement: HTMLTextAreaElement | null = $state(null)

  function newMessage() {
    let message = createMessageFrom(currentBranchLastId, textInput)
    addMessage(message)
    currentChat = chatFrom(message.id, 15)
    textInput = ""
    setTimeout(() => textInputElement!.focus(), 0)
  }

  function newTopic(parent: Id) {
    console.log("new topic from", parent)
  }
</script>

<main class="flex flex-col p-4 gap-4 items-center">
  <div class="flex flex-col-reverse gap-4" style="width: 65ch;">
    {#each currentChat as message}
      <MessageView value={message} {newTopic}></MessageView>
    {/each}
  </div>

  <hr />

  <form action="" class="flex flex-row gap-4 justify-stretch align-stretch">
    <label>
      <textarea
        class="outline outline-2 rounded-sm outline-blue-100 h-full"
        placeholder="New note"
        bind:this={textInputElement}
        bind:value={textInput}
      ></textarea>
    </label>
    <button
      type="submit"
      class="bg-blue-100 rounded-sm px-4 py-1"
      onclick={newMessage}>Send</button
    >
  </form>
</main>
