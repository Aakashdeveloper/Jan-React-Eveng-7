import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import ListingApi from './component/Listing/listingApi';
import HotelDetails from './component/details/hotelDetails';
import PlaceOrder from './component/booking/placeBooking';
import Viewbooking from './component/booking/bookingApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route  path="/list/:id" component={ListingApi}/>
            <Route  path="/details/:id" component={HotelDetails}/>
            <Route  path="/booking/:hotel_name" component={PlaceOrder}/>
            <Route  path="/viewbooking" component={Viewbooking}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;