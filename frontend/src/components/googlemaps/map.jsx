import React from "react";

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";
import Geocode from "react-geocode";
import AutoComplete from 'react-google-autocomplete'

Geocode.setApiKey("AIzaSyDWRrh9zLyd_Xu6eMqomtLpTDFNX-O_y4A");

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
            debugger;
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
        });
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
                    <InfoWindow>
                        <div>You are here</div>
                    </InfoWindow>
                </Marker>
                <h3>To find a specific store, enter its name below or click <a href="https://www.google.com/maps/search/?api=1&query=grocery" target="_blank"><button>here</button></a> to see all nearby store options.</h3>
                <AutoComplete
                    style={ {width: "100%", height: "40px" }}
                    onPlaceSelected={this.onPlaceSelected}
                    types={['establishment']}
                    placeholder="Store Name"
                />
            </GoogleMap>
            ))
        );
          

        return (
            <div id="map">
                <h1 style={{marginTop: "80px"}}>Nearby Stores</h1>
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDWRrh9zLyd_Xu6eMqomtLpTDFNX-O_y4A&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}

export default MapShow;

