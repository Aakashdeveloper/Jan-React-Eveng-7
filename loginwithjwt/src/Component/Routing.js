import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RegisterComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';
import UserList from './UserList';
import Profile from './Profile'

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/users" component={UserList}/>
                <Route path="/profile" component={Profile}/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing