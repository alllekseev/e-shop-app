import {nanoid} from "nanoid";

export const selectChat = (state) => Object.keys(state.messages).map((chat) => ({
  id: nanoid(),
  name: chat
}))

export const selectMessages = (state) => state.messages;
