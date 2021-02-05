import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './header.css'

class Header extends Component{
    constructor(){
        super()

        this.state={
            username:'',
            imgurl:''
        }
    }

    conditionalHeader =() => {
        if(sessionStorage.getItem('username') == null || sessionStorage.getItem('username') == undefined){
            return(
                <li>
                    <a href="https://github.com/login/oauth/authorize?client_id=841775ffdee13afd7f4f">
                        Login With Github
                    </a>
                </li>
            )
        }else{
            return(
                <li>
                    <a href="">
                        <img src={this.state.imgurl} className="myimg"/>
                        Hi {sessionStorage.getItem('username')}
                    </a>
                </li>
            )
        }
    }

    render(){
        return(
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Developer Funnel</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {this.conditionalHeader()}
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }

    componentDidMount(){
        const code = (this.props.location.search).split('=')[1];
        if(code){
            let requestData={
                code:code
            }
            fetch('http://localhost:9800/oauth',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(requestData)
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                var user  =  data.login
                var img = data.avatar_url
                sessionStorage.setItem('username',user)
                this.setState({username:user,imgurl:img})
            })
        }
    }
}

export default withRouter(Header);