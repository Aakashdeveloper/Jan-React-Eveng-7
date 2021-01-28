import React,{Component} from 'react';
import axios from 'axios';

const rurl = "https://developerfunnel.herokuapp.com/hotellist";

class RoomFilter extends Component{
    filterRoom = (event) => {
        let roomId = event.target.value;
        console.log(roomId)
        let tripId = sessionStorage.getItem('tripid');
        let roomurl;
        if(roomId==''){
            roomurl =`${rurl}/${tripId}`
        }else{
            roomurl = `${rurl}/${tripId}?roomtype=${roomId}`
            console.log(roomurl)
        }
        axios.get(roomurl)
        .then((response) => {this.props.roomPerType(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center>Room Type</center>
                <div onChange={this.filterRoom}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room"/>Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room"/>Premium Rooms
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room"/>Travle Rooms
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room"/>Semi Deluxe Room
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default RoomFilter;