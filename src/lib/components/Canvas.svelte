<script lang="ts">
    import { onMount, setContext } from 'svelte'

    type Scale = {
        current: number
        min: number
        max: number
        factor: number
    }

    let { children, scale = $bindable({ current: 1, min: 0.1, max: 4, factor: 0.05 }) }: { children: any; scale?: Scale } = $props()

    let canvas: HTMLDivElement | null = $state(null)
    onMount(() => {
        canvas?.addEventListener('wheel', onWheel, { passive: false });
        canvas?.addEventListener('touchmove', onTouchMove, { passive: false });
        return () => {
            canvas?.removeEventListener('wheel', onWheel);
            canvas?.removeEventListener('touchmove', onTouchMove);
        };
    })

    let dragProject: ((event: any) => void) | null = $state(null)
    let isDragging = $derived(dragProject !== null) 
    setContext('graph', {
        startDrag(project: any) {
            dragProject = project
        },
        stopDrag()  {
            dragProject = null
        },
        isDragging() {
            return isDragging
        }
    })

    let isDraggingCanvas = false
    let canvasOffset = $state({ x: 0, y: 0 })
    function scrollCanvas(offset: { x: number; y: number }) {
        canvasOffset.x += offset.x
        canvasOffset.y += offset.y
    }

    function onMouseMove(event: any) {
        if (isDraggingCanvas) {
            // drag with mouse
            scrollCanvas({
                x: event.movementX,
                y: event.movementY,
            })
            return;
        } 
    
        dragProject?.(event)
    }

    function onMouseUp() {
        dragProject = null
        isDraggingCanvas = false
    }

    function onCanvasMouseDown(event: any) {
        if (event.button === 1) {
            isDraggingCanvas = true;
        }
    }

    function onWheel(event: WheelEvent) {
        const { deltaX, deltaY, clientX, clientY, ctrlKey, shiftKey } = event
        if (ctrlKey) {
            // scale
            event.preventDefault()
            
            // @ts-ignore
            const canvasRect = event.currentTarget.getBoundingClientRect()

            let normalX = clientX / canvasRect.width - 0.5
            let normalY = clientY / canvasRect.height - 0.5

            const mouseX = canvasRect.width * normalX
            const mouseY = canvasRect.height * normalY

            const change = scale.factor * -Math.sign(deltaY)
            const changedScale = Math.min(Math.max(scale.min, scale.current + change), scale.max)

            const ratio = changedScale / scale.current
            canvasOffset.x = mouseX - ratio * (mouseX - canvasOffset.x)
            canvasOffset.y = mouseY - ratio * (mouseY - canvasOffset.y)

            scale.current = changedScale
        } else if (shiftKey) {
            // scroll horizontally
            scrollCanvas({
                x: -deltaY,
                y: 0,
            })
        } else {
            // scroll both directions (touchpad)
            scrollCanvas({
                x: -deltaX,
                y: -deltaY,
            })
        }
    }

    let touchStartPos = { x: 0, y: 0 };
    let isPinching = false;

    function onTouchStart(event: TouchEvent) {
        if (event.touches.length === 1) {
            touchStartPos = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        }
    }

    function onTouchMove(event: TouchEvent) {
        event.preventDefault();
        if (!isPinching && event.touches.length === 1) {
            const dx = event.touches[0].clientX - touchStartPos.x;
            const dy = event.touches[0].clientY - touchStartPos.y;
            touchStartPos = { x: event.touches[0].clientX, y: event.touches[0].clientY };
            scrollCanvas({ x: dx, y: dy });
        }
    }

</script>

<div class="flex flex-col px-1 py-0.5 flex-grow">
    <div
        class="flex flex-grow cursor-default w-full h-full overflow-hidden relative"
        onmousemove={onMouseMove}
        onmouseup={onMouseUp}
        onmousedown={onCanvasMouseDown}
        ontouchstart={onTouchStart}
        role="button"
        tabindex="0"
        bind:this={canvas}
        class:cursor-grabbing={dragProject !== null}
        
    >
        <div
            class="flex flex-grow origin-center"
            style="transform: translate({canvasOffset.x}px, {canvasOffset.y}px) scale({scale.current});"
        >
            {@render children()}
        </div>
    </div>
</div>
