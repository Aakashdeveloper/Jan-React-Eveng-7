import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';

const App = () => {
    return(
        <React.Fragment>
            <Header/>
            <h1>Hii From React</h1>
            <h2>Hi from Nareshit</h2>
            <Footer/>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))