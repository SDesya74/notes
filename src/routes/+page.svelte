<script lang="ts">
    import Message from '$lib/components/Message.svelte'
    import { createMessage, messages, type Id } from '$lib/index.svelte'
    import { page } from '$app/stores'
    import { goto } from '$app/navigation'
    import { browser } from '$app/environment'
    import { base } from '$app/paths'

    import submitIcon from '$lib/assets/controlIcons/submitIcon.svg?raw'

    // if there is hash with a leaf note id, open it
    // if there is no hash, redirect to a last created note

    let leafId: Id | null = $state(null)
    if (browser) {
        if ($page.url.hash !== '') leafId = $page.url.hash.substring(1)
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
        leafId = $page.url.hash.substring(1)
    })

    let leaf = $derived(messages.get(leafId!))
    let currentChat = $derived(messages.chatFrom(leafId!, 15).toReversed())
    let lastId = $derived(messages.untilBranchOrLeaf(leafId!))

    let textInput = $state('')
    // TODO: Make a multiline chat input that grows dynamically
    let textInputElement: HTMLInputElement | null = $state(null)

    function appendMessage() {
        let message = createMessage(textInput)
        leafId = messages.add(leafId, message)

        textInput = ''

        localStorage.setItem('notes', JSON.stringify(messages.export()))

        let url = $page.url
        url.hash = leafId
        goto(url)

        setTimeout(() => textInputElement!.focus(), 0)
    }

    function deleteMessage(value: Message) {
        if (messages.isLeaf(value.id)) {
            let id = value.parent ?? messages.lastCreatedAt()!.id
            goto(`${base}/#${id}`)
        }
        messages.delete(value.id)
        localStorage.setItem('notes', JSON.stringify(messages.export()))
    }
</script>

<!-- TODO: Fullsize note editor on a separate page or in a bottom sheet -->
<div class="container mx-auto">
    <div class="h-screen flex flex-col justify-end overflow-y-auto p-4 pb-36">
        {#if currentChat}
            {#each currentChat as message}
                <Message
                    value={message}
                    ondelete={deleteMessage}
                    isLast={message.id === lastId}
                />
            {/each}
        {/if}

        {#if leaf}
            {#if leaf.children.size > 1}
                <div class="flex flex-col gap-2 pt-2">
                    Куда дальше?
                    {#each leaf.children as child}
                        <a
                            class="px-2 bg-accent rounded-md"
                            href="{base}/#{messages.untilBranchOrLeaf(child)}"
                            >{messages.get(child)?.data.content}</a
                        >
                    {/each}
                </div>
            {/if}
        {/if}

        {#if lastId && lastId !== leafId}
            <a href="{base}/#{lastId}">До конца</a>
        {/if}
    </div>

    <footer
        class="dark:text-white bg-slate-100 dark:bg-slate-700 border-t border-gray-300 dark:border-slate-600 p-4 absolute left-0 bottom-0 w-full"
    >
        <form
            class="flex items-center container mx-auto"
            onsubmit={appendMessage}
        >
            <input
                type="text"
                bind:this={textInputElement}
                bind:value={textInput}
                placeholder="Type a message..."
                class="w-full p-2 focus:outline-none focus:border-blue-500 bg-transparent"
            />
            <button class="px-4 py-2 rounded-md ml-2" type="submit">
                {@html submitIcon}
            </button>
        </form>
    </footer>
</div>
