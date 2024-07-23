# Notes App

A PoC of a graph/tree based notes app. It's like a mind map or obsidian graph but with some chatbot-like features.

## Features

- [x] Extending a topic (tree leaf)
- [x] Creating a new topic from a message
- [ ] Moving between topics (requires some kind of a graph view)
- [x] Import, Export and saving in a local storage
- [x] Markdown support
- [ ] Interactive markdown (checkboxes and plugins)
- [ ] Design
  - [ ] Color and name for each topic
  - [ ] Good messages design
  - [ ] Pretty graph view
  - [ ] A better description of the design than “pretty” and “good”

### Plans for the distant future

- [ ] Full-featured "multiplayer" chat with topics and graph view
- [ ] Mobile version

## Developing

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev --open
```

## Building

To create a production version:

```bash
yarn build
```
