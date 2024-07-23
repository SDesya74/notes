<script lang="ts">
    import MessageView from '$lib/components/Message.svelte'
    import { createMessage, messages, type Id } from '$lib/index.svelte'
    import { page } from '$app/stores'
    import { goto } from '$app/navigation'
    import { browser } from '$app/environment'

    // if there is hash with a leaf note id, open it
    // if there is no hash, redirect to a last created note

    let leaf: Id | null = $state(null)
    if (browser) {
        if ($page.url.hash !== '') leaf = $page.url.hash.substring(1)
        else if (messages.length > 0) {
            // TODO: Ideally we need to show a list of topics to open or even a graph
            let url = $page.url
            url.hash = messages.lastCreatedAt()!.id
            goto(url)
        } else {
            // TODO: We need to show a screen to create a first note
        }
    }

    $effect(() => {
        if (leaf) {
            let url = $page.url
            url.hash = leaf!
            goto(url)
        }
    })

    let currentChat = $derived(messages.chatFrom(leaf!, 15))

    let textInput = $state('')
    let textInputElement: HTMLTextAreaElement | null = $state(null)

    function newMessage() {
        let message = createMessage(textInput)
        leaf = messages.add(leaf, message)

        textInput = ''

        localStorage.setItem('notes', JSON.stringify(messages.export()))

        setTimeout(() => textInputElement!.focus(), 0)
    }

    function newTopic(parent: Id) {
        let url = $page.url
        url.hash = parent
        leaf = parent
        goto(url)
    }
</script>

<main class="flex flex-col p-4 gap-4 items-center">
    <div class="flex flex-col-reverse gap-4" style="width: 65ch;">
        {#each currentChat as message (message.id)}
            <MessageView value={message} {newTopic}></MessageView>
        {/each}
    </div>

    <hr />

    <!-- TODO: Fullsize note editor on a separate page or in a bottom sheet -->
    <form class="flex flex-row gap-4 justify-stretch align-stretch">
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
