import React,{Component} from 'react';
import {connect} from 'react-redux';

class Home extends  Component{

    render(){
        return(
            <div>
                Redux2
            </div>
        )
    }
}


export default connect()(Home)
