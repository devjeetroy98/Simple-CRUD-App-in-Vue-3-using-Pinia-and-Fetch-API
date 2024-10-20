<script setup lang="ts">
// TODO: Pinia Store Import and initialization
import { useTodos } from '../stores/todos'
import { storeToRefs } from 'pinia'
const store = useTodos()
const { todos } = storeToRefs(store)

// TODO:  Dealing with forms
let formData = {
  taskName: '',
  taskDescription: '',
}

function handleSubmit() {
  let payload = { id: Date.now(), ...formData }
  store.addTodo(payload)
  resetForm()
}

function resetForm() {
  formData = {
    taskName: '',
    taskDescription: '',
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="left-pane">
      <div class="form-container">
        <form @submit.prevent="handleSubmit">
          <div class="form-control">
            <label for="taskname">Task Name</label>
            <input
              type="text"
              name="taskname"
              id="taskname"
              placeholder="Enter your task name"
              v-model="formData.taskName"
            />
          </div>
          <div class="form-control">
            <label for="taskdescription">Task Name</label>
            <textarea
              name="taskdescription"
              id="taskdescription"
              placeholder="Enter task description"
              v-model="formData.taskDescription"
            ></textarea>
          </div>
          <div class="form-control">
            <button type="submit">Create Task</button>
            <button type="reset">Reset Form</button>
          </div>
        </form>
      </div>
    </div>

    <div class="right-pane">
      <div class="empty-list" v-show="todos.length === 0">
        <div class="task">
          <h1>Bravo! Worklist empty.</h1>
          <h2>It looks like you don't have any pending task!</h2>
        </div>
      </div>
      <div class="tasks-list" v-show="todos.length > 0">
        <h1>Pending tasks:</h1>
        <div class="task" v-for="todo in todos" :id="todo.id.toString()">
          <p>{{ todo.taskName }}</p>
          <p>{{ todo.taskDescription }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  display: flex;
  height: 92vh;
  width: 100%;
}

.container-fluid .left-pane {
  width: 50%;
  border-right: 1px solid blueviolet;
  padding: 0px 100px;
  margin: auto;
}

.container-fluid .left-pane .form-container form {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container-fluid .left-pane .form-container form .form-control {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 25px;
}

.container-fluid .left-pane .form-container form label {
  font-size: 1.5rem;
  padding-bottom: 15px;
}

.container-fluid .left-pane .form-container form input {
  height: 50px;
  font-size: 1rem;
  padding: 10px;
}

.container-fluid .left-pane .form-container form textarea {
  height: 200px;
  font-size: 1rem;
  font-family: sans-serif;
  padding: 10px;
}

.container-fluid .left-pane .form-container form .form-control:last-child {
  flex-direction: row;
  gap: 5px;
}

.container-fluid
  .left-pane
  .form-container
  form
  .form-control:last-child
  button {
  height: 2.5rem;
  width: 7rem;
}

.container-fluid
  .left-pane
  .form-container
  form
  .form-control:last-child
  button:first-child {
  background-color: blueviolet;
  border: 1px solid blueviolet;
  color: white;
  border-radius: 5px;
}

.container-fluid
  .left-pane
  .form-container
  form
  .form-control:last-child
  button:last-child {
  background-color: white;
  border: 1px solid white;
  color: blueviolet;
  border-radius: 5px;
}

.container-fluid .right-pane {
  width: 50%;
  max-height: 80vh;
  overflow-y: scroll;
}

.container-fluid .right-pane .empty-list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-fluid .right-pane .empty-list h1 {
  color: blueviolet;
}

.container-fluid .right-pane .tasks-list {
  width: 100%;
  height: auto;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
}

.container-fluid .right-pane .tasks-list h1 {
  position: sticky;
  top: 0vh;
  background: #181818;
  padding-bottom: 10px;
}

.container-fluid .right-pane .tasks-list .task {
  padding-top: 30px;
}

.container-fluid .right-pane .tasks-list .task:hover {
  filter: brightness(120%);
  cursor: pointer;
}

.container-fluid .right-pane .tasks-list .task p:first-child {
  color: blueviolet;
  font-size: 1.5rem;
}

.container-fluid .right-pane .tasks-list .task:hover p:last-child {
  color: white;
}
</style>
