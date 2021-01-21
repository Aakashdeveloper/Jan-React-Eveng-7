import React from 'react';
import Search from './Serach';
import QuickSearch from './QuickSearch';

const Home = () => {
    return(
        <React.Fragment>
            <Search/>
            <QuickSearch/>
        </React.Fragment>
    )
}

export default Home