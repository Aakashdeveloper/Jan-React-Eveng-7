import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

const App = () => {
    return(
        <div>
            <Header/>
            <h1>Hii From React</h1>
            <h2>Hi from Nareshit</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))