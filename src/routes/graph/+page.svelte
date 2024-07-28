<script lang="ts">
    import { onMount } from 'svelte'
    import Note from '$lib/components/Note.svelte'
    import Line from '$lib/components/Line.svelte'
    import { messages as messagesStore, type Message } from '$lib/index.svelte'
    import { browser } from '$app/environment'

    let links = {}
    let messages = {}
    let positions = {}

    if (browser) {
        // TODO: Use messages instead of localStorage
        let data = localStorage.getItem('notes') ?? '{}'
        let parseData = JSON.parse(data)
        links = parseData.links
        messages = parseData.messages

        let messageYPos = 0
        let messageXPos = 200

        let parents = new Set()
        let childrenPos = {}

        Object.keys(messages).map((index) => {
            if (parents.has(links[index])) {
                positions[index] = {
                    x: childrenPos[links[index]].x + 150,
                    y: childrenPos[links[index]].y,
                }
                childrenPos[links[index]].x = childrenPos[links[index]].x + 150
            } else {
                let newYPos = messageYPos * 100 + 20
                let newXPos = messageXPos + 100
                parents.add(links[index])
                childrenPos[links[index]] = { x: newXPos, y: newYPos }
                positions[index] = { x: newXPos, y: newYPos }
                messageYPos++
            }
        })
    }

    onMount(()=>{
        const canvas = document.querySelector('.canvas');
        if (canvas) {
            canvas.addEventListener('wheel', onWheel, { passive: false });
        }

        return () => {
            if (canvas) {
                canvas.removeEventListener('wheel', onWheel);
            }
        };
    })

    let dragging = null as any
    let offset = { x: 0, y: 0 }

    let isDraggingCanvas = false
    let scale = 1
    const scaleFactor = 0.1
    let canvasOffset = { x: 0, y: 0 }

    function scrollCanvas(offset: { x: number; y: number }) {
        canvasOffset.x += offset.x
        canvasOffset.y += offset.y
    }

    function onMouseDown(event: any, index: number) {
        dragging = index
        offset.x =
            (event.clientX - (positions[index].x + canvasOffset.x) * scale) /
            scale
        offset.y =
            (event.clientY - (positions[index].y + canvasOffset.y) * scale) /
            scale
    }

    function onMouseMove(event: any) {
        if (isDraggingCanvas) {
            scrollCanvas({
                x: event.movementX,
                y: event.movementY,
            })
        } else if (dragging !== null) {
            positions[dragging] = {
                x: (event.clientX - offset.x * scale) / scale - canvasOffset.x,
                y: (event.clientY - offset.y * scale) / scale - canvasOffset.y,
            }
        }
    }

    function onMouseUp() {
        dragging = null
        isDraggingCanvas = false
    }

    function onCanvasMouseDown(event: any) {
        if (event.target === event.currentTarget) {
            isDraggingCanvas = true
        }
    }

    function onWheel(event: WheelEvent) {
        const { deltaX, deltaY, clientX, clientY, ctrlKey, altKey } = event;
        if (ctrlKey) {
            event.preventDefault();
            const canvasRect = event.currentTarget.getBoundingClientRect();
            const mouseX = clientX - canvasRect.left;
            const mouseY = clientY - canvasRect.top;

            const scaleChange = deltaY < 0 ? scaleFactor : -scaleFactor;
            const newScale = Math.min(Math.max(0.5, scale + scaleChange), 3);

            const scaleRatio = newScale / scale;
            canvasOffset.x = mouseX - scaleRatio * (mouseX - canvasOffset.x);
            canvasOffset.y = mouseY - scaleRatio * (mouseY - canvasOffset.y);

            scale = newScale;
        } else if (altKey) {
            scrollCanvas({
                x: -deltaY,
                y: 0,
            });
        } else {
            scrollCanvas({
                x: -deltaX,
                y: -deltaY,
            });
        }
    }
</script>

<div class="flex flex-col px-1 py-0.5 flex-grow">
    <div
        class="flex flex-grow cursor-default w-full h-full overflow-hidden relative canvas"
        onmousemove={onMouseMove}
        onmouseup={onMouseUp}
        onmousedown={onCanvasMouseDown}
        role="button"
        tabindex="0"
    >
        <div
            class="flex flex-grow"
            style="transform: translate({canvasOffset.x}px, {canvasOffset.y}px) scale({scale}); transform-origin: 0 0; visibility: hidden;"
        >
            {#each Object.keys(links) as index}
                <Line
                    messageId={index}
                    posIndexX={positions[index].x}
                    posIndexY={positions[index].y}
                    posLinksX={positions[links[index]].x}
                    posLinksY={positions[links[index]].y}
                />
            {/each}
            {#each Object.keys(messages) as index}
                <Note
                    messageId={index}
                    posX={positions[index].x}
                    posY={positions[index].y}
                    messageContent={messages[index].content}
                    onMouseDown={(event) => onMouseDown(event, index)}
                />
            {/each}
        </div>
    </div>
</div>
