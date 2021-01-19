import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDisplay from './newsDisplay';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }
    /*
        var a = [3,6,8,4,4,7,9]
        a.filter((data) => {return data>5})
    */

    filterNews=(keyword) =>{
        console.log(`in Home ${keyword}`)
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        return(
            <React.Fragment>
                <Header userText={(data)=>{this.filterNews(data)}}/>
                <NewsDisplay newsdata={this.state.filtered}/>
                <Footer year="2021" month="Jan"/>
            </React.Fragment>
        )
    }
    
}

export default Home;