import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import ListingApi from './component/Listing/listingApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/list/:id" component={ListingApi}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;