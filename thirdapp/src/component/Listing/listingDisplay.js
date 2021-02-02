import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';

const ListingDisplay = (props) => {
    const renderList = ({hotellist}) => {
        if(hotellist){
            if(hotellist.length>1){
                return hotellist.map((item) => {
                    return(
                        <div className="item">
                            <div className="row">
                                <div className="col-sm-5">
                                    <img className="Image" src={item.thumb}/>
                                </div>
                                <div className="col-sm-7">
                                    <div className="hotel_name">
                                        <Link to={`/details/${item._id}`}>{item.name}</Link>
                                        <div className="city_name">{item.city_name}</div>
                                        <div className="city_name">{item.locality}</div>
                                        <div className="city_name">{item.address}</div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="cuisine">Room Type</div>
                                    <div className="cuisine">Cost For Night</div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="cuisine_data">
                                        {item.type[0].name}
                                    </div>
                                    <div className="cuisine_data">Rs. {item.cost}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }else{
                return(
                    <h2>No Data Found</h2>
                )
            }
        }else{
            return(
                <div className="item">
                    <img src="/images/loader.gif"/>
                </div>
            )
        }
    }
    return(
        <div className="container-fluid">
            <div className="main-heading">
                <div className="row">
                    <div className="col-md-12">
                        {renderList(props)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingDisplay