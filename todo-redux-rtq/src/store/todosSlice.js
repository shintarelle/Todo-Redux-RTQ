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
export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async function (text, {rejectWithValue, dispatch}) {
    try {
      const todo = {
        title: text,
        completed: false,
      }
      const responce = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
      });
      if (!responce.ok) {
        throw new Error('can\'t create new element');
      }
      dispatch(addTodo(text))
      const data = await responce.json();
      console.log('data in add todo', data);

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)
export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function (id, {rejectWithValue, dispatch}) {
      try {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          method: 'DELETE',
        })
        console.log('responce delete', responce)
        if (!responce.ok) {
          throw new Error('cant delete element: ' + id)
        }
        dispatch(removeTodo(id))
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
)
export const toggleTodoAsync = createAsyncThunk(
  'todos/toggleTodoAsync',
  async function (id, { rejectWithValue, dispatch, getState }) {
    const todo = getState().todos.find(todo => todo.id == id);
    // console.log('todo in async toggle', todo, id);
    try {
      const responce = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          completed: !todo.completed,
        }),
      })
      // console.log('responce toggle', responce)
      if (!responce.ok) {
        throw new Error('cant toggle status of element: ' + id)
      }
      // const data = await responce.json()
      // console.log('data', data)
      dispatch(toggleComplete(id))
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)
export const saveTodoAsync = createAsyncThunk(
  'todos/saveTodoAsync',
  async function ({ id, value }, { rejectWithValue, dispatch, getState }) {
    const todo = getState().todos.find(todo => todo.id == id);
    try {
      const responce = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: value,
        }),
      })
      if (!responce.ok) {
        throw new Error('can\'t change title of element: ' + id)
      }
      dispatch(saveTodo({ id, value }))
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)
const setError = (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    }
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
          id: new Date().toISOString(),        //different id on UI and Server
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
    [fetchTodos.rejected]: setError,
    [addTodoAsync.rejected]: setError,
    [deleteTodo.rejected]: setError,
    [toggleTodoAsync.rejected]: setError,
    [saveTodoAsync.rejected]: setError,
  },
  })

// console.log('todosSlice', todosSlice)
export const { addTodo, clearTodo, sortByMin, sortByMax, toggleComplete, removeTodo, saveTodo } = todosSlice.actions
export default todosSlice.reducer
