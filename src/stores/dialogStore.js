import { defineStore } from "pinia";

export const useDialogStore = defineStore("dialog", {
  state: () => ({
    id: 1,
    dialog: [
      {
        id: "1",
        text: "hello, 1!",
      },
      {
        id: "2",
        text: "hello, 2!",
      },
    ],
  }),
  actions: {
    addText({ id, text }) {
      this.dialog.push({ id, text });
    },
  },
});
