// import { createSlice } from "@reduxjs/toolkit";

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState: {
//     todos: [],
//     status: null,
//     error: null,
//   },
//   reducers: {
//     addTodo(state, action) {
//       console.log(action)
//         state.todos.push({
//           id: new Date().toISOString(),
//           title: action.payload,
//           completed: false,
//         });
//     },
//     clearTodo(state, action) {
//       state.todos = []
//     },
//     sortByMin(state, action) {
//       state.todos = state.todos.sort(function (a, b) {
//       if (a.id > b.id) {
//         return 1;
//       }
//       if (a.id < b.id) {
//         return -1;
//       }
//       return 0;
//     })
//     },
//     sortByMax(state, action) {
//       state.todos = state.todos.sort(function (a, b) {
//       if (a.id < b.id) {
//         return 1;
//       }
//       if (a.id > b.id) {
//         return -1;
//       }
//     return 0;
//     })
//     },

//     toggleComplete(state, action) {
//       const toggledTodo = state.todos.find(todo => todo.id == action.payload);
//       toggledTodo.completed = !toggledTodo.completed;
//     },
//     removeTodo(state, action) {
//         state.todos = state.todos.filter(todo => todo.id != action.payload);
//     },
//     saveTodo(state, action) {
//       console.log(action)
//       const savedTodo = state.todos.find(todo => todo.id == action.payload.id);
//       savedTodo.title = action.payload.value;
//     }
//   },
// })
// console.log('todosSlice', todosSlice)
// export const { addTodo, clearTodo, sortByMin, sortByMax, toggleComplete, removeTodo, saveTodo } = todosSlice.actions
// export default todosSlice.reducer
