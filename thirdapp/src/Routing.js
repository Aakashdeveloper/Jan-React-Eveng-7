import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import ListingApi from './component/Listing/listingApi';
import HotelDetails from './component/details/hotelDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route  path="/list/:id" component={ListingApi}/>
            <Route  path="/details/:id" component={HotelDetails}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;