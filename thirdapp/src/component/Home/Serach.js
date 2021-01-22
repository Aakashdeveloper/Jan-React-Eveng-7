import React,{Component} from 'react';
import './Search.css';

const lurl = "https://developerfunnel.herokuapp.com/location";
const hurl = "https://developerfunnel.herokuapp.com/hotels?city=";

class Search extends Component{
    constructor(){
        super()
        console.log(">>>>inside constructor")
        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        console.log("data>>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel= (data) => {
        console.log("data>>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleCity = (event) =>{
        //console.log(event.target.value)
        const cityId = event.target.value;
        fetch(`${hurl}${cityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({hotels:data})
        })
    }
    render(){
        console.log(">>>>inside render")
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>-----Select City---</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput">
                        <option>-----Select Hotel---</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    componentDidMount(){
    console.log(">>>>inside componentDidMount")
       fetch(lurl,{method:'GET'})
       .then((res)=>res.json())
       .then((data) => {
           this.setState({location:data})
       })
       .catch((err) => {
           console.log(err)
       })
    }
}

export default Search;