import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/MainPage'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'
import Login from './pages/Login'
import './App.css';

export default function App() {
  return (
    <>
      <div className="bar">
        <div className="Link">
          <a href="/mainpage">Main Page</a>
          <a href="/createpost">Create Post</a>
          <a href="/login">Login</a>
        </div>
      </div>
      <div>
        <Router>
          <Route path="/" exact render={(props) => <MainPage />} />
          <Route path="/mainpage" exact render={(props) => <MainPage />} />
          <Route path="/createpost" render={(props) => <CreatePost />} />
          <Route path='/post/:postID' render={(props) => <Post />} />
          <Route path="/login" render={(props) => <Login />} />
        </Router>
      </div>
    </>
  );
}
