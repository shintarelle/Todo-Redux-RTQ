import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  // todos: [
  //   {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "delectus aut autem",
  //   "completed": false
  // },
  // {
  //   "userId": 1,
  //   "id": 2,
  //   "title": "quis ut nam facilis et officia qui",
  //   "completed": false
  // },
  // {
  //   "userId": 1,
  //   "id": 3,
  //   "title": "fugiat veniam minus",
  //   "completed": false
  // },
  // {
  //   "userId": 1,
  //   "id": 4,
  //   "title": "et porro tempora",
  //   "completed": true
  // },
  // {
  //   "userId": 1,
  //   "id": 5,
  //   "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
  //   "completed": false
  // },
  // {
  //   "userId": 1,
  //   "id": 6,
  //   "title": "qui ullam ratione quibusdam voluptatem quia omnis",
  //   "completed": false
  // },
  // {
  //   "userId": 1,
  //   "id": 7,
  //   "title": "illo expedita consequatur quia in",
  //   "completed": false
  // },
  // {
  //   "userId": 1,
  //   "id": 8,
  //   "title": "quo adipisci enim quam ut ab",
  //   "completed": true
  // },
  // {
  //   "userId": 1,
  //   "id": 9,
  //   "title": "molestiae perspiciatis ipsa",
  //   "completed": false
  // },
  // {
  //   "userId": 1,
  //   "id": 10,
  //   "title": "illo est ratione doloremque quia maiores aut",
  //   "completed": true
  // },
  // {
  //   "userId": 1,
  //   "id": 11,
  //   "title": "vero rerum temporibus dolor",
  //   "completed": true
  // },
  // {
  //   "userId": 1,
  //   "id": 12,
  //   "title": "ipsa repellendus fugit nisi",
  //   "completed": true
  // },
  // {
  //   "userId": 1,
  //   "id": 13,
  //   "title": "et doloremque nulla",
  //   "completed": false
  // },
  // {
  //   "userId": 1,
  //   "id": 14,
  //   "title": "repellendus sunt dolores architecto voluptatum",
  //   "completed": true
  // },
  // {
  //   "userId": 1,
  //   "id": 15,
  //   "title": "ab voluptatum amet voluptas",
  //   "completed": true
  // },
  // {
  //   "userId": 1,
  //   "id": 16,
  //   "title": "accusamus eos facilis sint et aut voluptatem",
  //   "completed": true
  // },
  // {
  //   "userId": 1,
  //   "id": 17,
  //   "title": "quo laboriosam deleniti aut qui",
  //   "completed": true
  // },
  // {
  //   "userId": 1,
  //   "id": 18,
  //   "title": "dolorum est consequatur ea mollitia in culpa",
  //   "completed": false
  // },
  // {
  //   "userId": 1,
  //   "id": 19,
  //   "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
  //   "completed": true
  // },
  // {
  //   "userId": 1,
  //   "id": 20,
  //   "title": "ullam nobis libero sapiente ad optio sint",
  //   "completed": true
  // }
  // ]
  todos: []
}
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function () {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await responce.json();
    return data;
  }
)
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      console.log(action)
        state.todos.push({
          id: new Date().toISOString(),
          title: action.payload,
          completed: false,
      //     const todo = action.payload
      // state.entities[todo.id] = todo
        });
    },
    clearTodo(state, action) {
      state.todos = []
    },
    sortByMin(state, action) {
      state.todos = state.todos.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    })
    },
    sortByMax(state, action) {
      state.todos = state.todos.sort(function (a, b) {
      if (a.id < b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }
    return 0;
    })
    },

    toggleComplete(state, action) {
      const toggledTodo = state.todos.find(todo => todo.id == action.payload);
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action) {
        state.todos = state.todos.filter(todo => todo.id != action.payload);
    },
    saveTodo(state, action) {
      console.log(action)
      const savedTodo = state.todos.find(todo => todo.id == action.payload.id);
      savedTodo.title = action.payload.value;
    }
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = 'pending';
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => { },

  },
})
// console.log('todosSlice', todosSlice)
export const { addTodo, clearTodo, sortByMin, sortByMax, toggleComplete, removeTodo, saveTodo } = todosSlice.actions
export default todosSlice.reducer
