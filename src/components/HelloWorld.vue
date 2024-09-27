<template>
  <h1>{{ msg }}</h1>
  <label class="label">
    <input type="radio" value="1" v-model="idd" />
    <span>Пользователь 1</span>
  </label>
  <label class="label">
    <input type="radio" value="2" v-model="idd" />
    <span>Пользователь 2</span>
  </label>
  <div class="text-container">
    <p
      :class="[
        mesg.id === '1' && 'text_first',
        mesg.id === '2' && 'text_second',
      ]"
      v-for="mesg in dialogStore.dialog"
    >
      {{ mesg.text }}
    </p>
  </div>

  <input
    type="text"
    placeholder="Введите текст..."
    v-model="newText"
    class="input"
  />
  <button
    type="button"
    @click="dialogStore.addText({ id: idd, text: newText })"
    class="button"
  >
    Добавить
  </button>
</template>

<script setup>
import { ref } from "vue";
import { useDialogStore } from "../stores/dialogStore";

defineProps({
  msg: String,
});

const idd = ref("1");
const newText = ref("");

const dialogStore = useDialogStore();
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.text-container {
  width: 500px;
  height: 300px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.text_first {
  color: white;
  background-color: rgb(155, 132, 177);
  padding: 10px;
  margin: 10px;
  text-align: left;
  width: fit-content;
  border-radius: 10px;
  align-self: flex-start;
}
.text_second {
  color: white;
  background-color: blueviolet;
  padding: 10px;
  margin: 10px;
  text-align: right;
  width: fit-content;
  border-radius: 10px;
  align-self: flex-end;
}
.button {
  width: 125px;
  height: 70px;
  border-radius: 10px;
  color: black;
  background-color: inherit;
  border: 1px solid black;
  margin: 20px;
}
.input {
  width: 300px;
  height: 50px;
  line-height: 30px;
  font-size: 24px;
}
.label {
  cursor: pointer;
}
</style>
