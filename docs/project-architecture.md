# UH18 Frontend

## Scaffolding

We used vue-cli with default options + yarn as package manager to create basic project scaffolding.

```bash
vue create uh18-frontend
```

This ends up with an app which can be started with `yarn serve`.

## Websockets

For communcation with the OSC server we use socket.io: `yarn add vue-socket.io`

## OSC

For receiving OSC vie UDP we use the npm package osc: `yarn add osc`

## UI

For the UI we use vuetify: `yarn add vuetify`

## MIDI

Midi messsages are generated and sent via easymidi. `yarn add easymidi`

## Configuration storage

Configurations created via the UI are persited in mongodb with mongoose. (`yarn add mongoose mongoose-unique-validator`)
