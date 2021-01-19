import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from './Component/Home';
import Post from './Component/Post';
import Profile from './Component/Profile';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
                <Link to="/profile">Profile</Link>
            </header>
           <Route exact path="/" component={Home}/>
           <Route path="/post" component={Post}/>
           <Route path="/profile" component={Profile}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
)