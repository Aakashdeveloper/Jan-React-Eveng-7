import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import RoomFilter from '../filters/roomfilter';
import CostFilter from '../filters/costFilter';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotelslist:''
        }
    }

    setDataAsPerFilter=(sortedData)=>{
        console.log(sortedData)
        this.setState({hotelslist:sortedData})
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    <RoomFilter roomPerType={(data)=>{this.setDataAsPerFilter(data)}}/>
                    <CostFilter roomPerCost={(data)=>{this.setDataAsPerFilter(data)}}/>
                </div>
                <div className="col-md-10">
                    <ListingDisplay hotellist={this.state.hotelslist}/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var tripid = this.props.match.params.id;
        sessionStorage.setItem('tripid',tripid)
        axios.get(`${url}/${tripid}`)
        //.then((response) => {this.setState({hotelslist:response.data})})
        .then((response) => {this.setState({hotelslist:response.data})})
    }
}

export default Listing;