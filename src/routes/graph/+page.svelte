<script lang="ts">
    import { onMount } from 'svelte';
    import Note from '../../lib/components/Note.svelte';
    import Line from '../../lib/components/Line.svelte';

    let links = {};
    let messages = {};
    let positions = {};

    let noteSizes = {
        'da-d23-asd0': { width: 100, height: 50 },
        'da-d23-asd1': { width: 120, height: 60 },
        'da-d23-asd2': { width: 130, height: 70 },
        'da-d23-asd3': { width: 110, height: 55 },
        'da-d23-asd4': { width: 140, height: 75 },
    };

    onMount(() => {
        let data = localStorage.getItem('notes');
        let parseData = JSON.parse(data);
        links = parseData.links;
        messages = parseData.messages;

        let messageYPos = 0;
        let messageXPos = 200;

        let parents = new Set();
        let childrenPos = {};

        Object.keys(messages).map((index) => {
            if (parents.has(links[index])) {
                positions[index] = {
                    x: childrenPos[links[index]].x + 150,
                    y: childrenPos[links[index]].y,
                };
                childrenPos[links[index]].x = childrenPos[links[index]].x + 150;
            } else {
                let newYPos = messageYPos * 100 + 20;
                let newXPos = messageXPos + 100;
                parents.add(links[index]);
                childrenPos[links[index]] = { x: newXPos, y: newYPos };
                positions[index] = { x: newXPos, y: newYPos };
                messageYPos++;
            }
        });
        console.log(childrenPos);
    });

    let dragging = null as any;
    let offset = { x: 0, y: 0 };
    
    let isDraggingCanvas = false; 
    let canvasOffset = { x: 0, y: 0 }; 

    function onMouseDown(event: any, index: number) {
        dragging = index;
        offset.x = event.clientX - positions[index].x;
        offset.y = event.clientY - positions[index].y;
    }

    function onMouseMove(event: any) {
        if (isDraggingCanvas) { 
            const dx = event.movementX; 
            const dy = event.movementY; 
            Object.keys(positions).forEach((key) => { 
                positions[key].x += dx; 
                positions[key].y += dy; 
            });
        } else if (dragging !== null) {
            positions[dragging] = {
                x: event.clientX - offset.x,
                y: event.clientY - offset.y,
            };
        }
    }

    function onMouseUp() {
        dragging = null;
        isDraggingCanvas = false; 
    }

    function onCanvasMouseDown(event: any) { 
        if (event.target === event.currentTarget) { 
            isDraggingCanvas = true; 
        } 
    } 
</script>

<style>
    .canvas {
        position: relative;
        overflow: hidden;
    }
</style>

<div class="flex flex-col px-1 py-0.5 flex-grow">
    <div
        class="border border-black flex flex-grow cursor-default canvas"
        on:mousemove={onMouseMove}
        on:mouseup={onMouseUp}
        on:mousedown={onCanvasMouseDown}
        style="position: relative;"
        role="button"
        tabindex="0"
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
