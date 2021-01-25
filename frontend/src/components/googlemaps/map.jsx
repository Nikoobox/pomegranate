import React from "react";
import {MdLocalGroceryStore} from 'react-icons/md';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";
import Geocode from "react-geocode";
import AutoComplete from 'react-google-autocomplete'

Geocode.setApiKey(process.env.REACT_APP_GOOGLE);

class MapShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mapPosition: {
                lat: 0, 
                lng: 0
            },
            markerPosition: {
                lat: 0, 
                lng: 0
            }
          };
    }

    // this method sets the default location to users home address 
    componentDidMount(){
        this.props.getUser(this.props.userId).then(res => {
            Geocode.fromAddress(res.user.data.address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({
                markerPosition: {
                    lat: lat,
                    lng: lng
                },
                mapPosition: {
                    lat: lat,
                    lng: lng
                }
                });
            },
            error => {
                console.error(error);
            }
            );
        })
        this.props.getUser(this.props.userId);
    }

    // this funstion changes the marker to che search result 
    onPlaceSelected = place => {
        const address = place.formatted_address,
        newLat = place.geometry.location.lat(),
        newLng = place.geometry.location.lng()
        this.setState({

            markerPosition: {
            lat: newLat,
            lng: newLng
            },
            mapPosition: {
            lat: newLat,
            lng: newLng
            }
        })
           
     
    }

    render() {
        const Map = withScriptjs(withGoogleMap(props => (
            <GoogleMap
                defaultZoom={16}
                defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng}}
            >
                <Marker 
                    position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                >
                   
                    {/* 
                        Add "Your Kitchen" Tag to window. 
                    <InfoWindow>
                        <div id="info-content">Your Kitchen</div>
                    </InfoWindow> 
                    */}
                   
                </Marker>
                <div className='map-instructions'>To find a specific store, enter its name below: </div>
                <div className='input-box'>
                    <AutoComplete
                        style={ {width: "50%", height: "40px" }}
                        onPlaceSelected={this.onPlaceSelected}
                        types={['establishment']}
                        placeholder="Store Name"
                        className='input'
                    />
                    <div className='map-instructions2'>
                        Click <a href="https://www.google.com/maps/search/?api=1&query=grocery" target="_blank"><button className='button-here'>here</button></a> to see nearby stores listed on Google.
                    </div>
                </div>
            </GoogleMap>
            ))
        );
          

        return (
            <div id="map">
                <div className='map-container'>
                    <div className='map-title'>Nearby Stores</div>
                    <Map
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE}&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        )
    }
}

export default MapShow;

