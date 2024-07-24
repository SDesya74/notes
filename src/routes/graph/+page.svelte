<script lang='ts'>
    import { onMount } from "svelte";
    import Note from "../../lib/components/Note.svelte";
    
    let links = { 0: "0", 1: "0", 2: "1", 3: "2", 4: "2" };
    let messages = {
      0: { content: "n1", createdAt: 1721805898875 },
      1: { content: "n2", createdAt: 1721805900864 },
      2: { content: "n3", createdAt: 1721805903140 },
      3: { content: "n4", createdAt: 1721805905711 },
      4: { content: "n3 1", createdAt: 1721805912329 }
    };
  
    let positions = {
      0: { x: 300, y: 100 },
      1: { x: 300, y: 200 },
      2: { x: 300, y: 300 },
      3: { x: 200, y: 400 },
      4: { x: 400, y: 400 }
    };
    
    onMount(() => {
        let data = localStorage.getItem('notes');
        let parseData = JSON.parse(data);
        links = parseData.links;
        messages = parseData.messages;
        positions = Object.keys(messages).map((index) => {
            return { x: 300, y: index * 100 + 50 };
        });
    });
  
  
    let dragging = null as any;
    let offset = { x: 0, y: 0 };
  
    function onMouseDown(event: any, index: number) {
      dragging = index;
      offset.x = event.clientX - positions[index].x;
      offset.y = event.clientY - positions[index].y;
    }
  
    function onMouseMove(event: any) {
      if (dragging !== null) {
        positions[dragging] = { x: event.clientX - offset.x, y: event.clientY - offset.y };
      }
    }
  
    function onMouseUp() {
      dragging = null;
    }
  </script>
  
  <style>
    .node {
      cursor: pointer;
    }
  </style>
  
  <div class="flex flex-col px-12 pt-5">
    <div class="border border-black" on:mousemove={onMouseMove} on:mouseup={onMouseUp} style="width: 600px; height: 600px; position: relative;" role="button" tabindex="0">
      <svg width="100%" height="100%" role="img">
        {#each Object.keys(links) as index}
          <line
            x1={positions[links[index]].x+50}
            y1={positions[links[index]].y+50}
            x2={positions[index].x+50}
            y2={positions[index].y}
            stroke="black"
          />
        {/each}
        {#each Object.keys(messages) as index}
          <Note
            posX={positions[index].x}
            posY={positions[index].y}
            message={messages[index].content}
            onMouseDown={(event) => onMouseDown(event, index)}
            />
        {/each}
      </svg>
    </div>
  </div>
  