import React, { useState, useRef, useMemo } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/myModal/MyModal';

function App() {

  const [posts, setPosts] = useState([
    { id: '1', title: 'Javascript 1', body: 'Description5' },
    { id: '2', title: 'Javascript 2', body: 'Description4' },
    { id: '3', title: 'Javascript 3', body: 'Description3' },
    { id: '4', title: 'Javascript 4', body: 'Description2' },
    { id: '5', title: 'Javascript 5', body: 'Description1' }
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log('work function getSortedPosts')
    if (filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])


  // const bodyInputRef = useRef(); //для неуправляемого компонента

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => post.id !== p.id))
  }


  return (
    <div className="app">
      <MyModal></MyModal>
      <PostForm addNewPost={addNewPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} title='List of posts' removePost={removePost} />
    </div>
  );
}

export default App;
