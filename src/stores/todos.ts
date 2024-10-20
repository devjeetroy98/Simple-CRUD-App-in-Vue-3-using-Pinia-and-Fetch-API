import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Todo {
  id: number
  taskName: string
  taskDescription: string
}

export const useTodos = defineStore('todos', () => {
  const todos = ref<Todo[]>([])

  function getTodos() {
    return todos.value
  }

  function getTodoById(id: number) {
    return todos.value.filter(todo => todo.id === id)
  }

  function addTodo(payload: Todo) {
    todos.value.push(payload)
  }

  return { todos, getTodos, getTodoById, addTodo }
})
