import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function (_, {rejectWithValue}) {
    try {
      const responce = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
    if (!responce.ok) {
      throw new Error('Oops! Something went wrong');
    }
    const data = await responce.json();
    // console.log('3 data', data);
    return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }

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
      state.status = 'loading';
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      // console.log('fulfilled.action', action)
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },

  },
})
// console.log('todosSlice', todosSlice)
export const { addTodo, clearTodo, sortByMin, sortByMax, toggleComplete, removeTodo, saveTodo } = todosSlice.actions
export default todosSlice.reducer
