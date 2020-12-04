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

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        address: "",
        city: "",
        area: "",
        state: "",
        zoom: 1000,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        }
        };
    }

    componentDidMount() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    mapPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    markerPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                },  () => {
                    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude)
                        .then((res) => {
                            const address = res.results[0].formatted_address,
                                addressArray = res.results[0].address_components,
                                city = this.getCity(addressArray),
                                area = this.getArea(addressArray),
                                state = this.getState(addressArray);
                            this.setState({
                                address: (address) ? address : "",
                                city: (city) ? city : "",
                                area: (area) ? area : "",
                                state: (state) ? state : "",
                            })
                        });
                    }
                )
            });
        }
    }

    getCity = (addressArray) => {
      let city = "";
      for(let index = 0; index < addressArray.length; index++) {
        if(addressArray[index].types[0] && 'administrative_area_level2' === addressArray[index].types[0]) {
          city = addressArray[index].long_name;
          return city;
        }
      }
    }

    getArea = (addressArray) => {
      let area = "";
      for (let index = 0; index < addressArray.length; index++) {
        if(addressArray[index].types[0]) {
          for (let j = 0; j < addressArray.length; j++) {
            if ('sublocality_level_1' === addressArray[index].types[j] || 'locality' === addressArray[index].types[j]) {
              area = addressArray[index].long_name;
              return area; 
            }
          }
        }
      }
    }


    getState = (addressArray) => {
      let state = "";
      for (let index = 0; index < addressArray.length; index++) {
        // for (let index = 0; index < addressArray.length; index++) {
            if(addressArray[index].types[0] && 'administrative_area_level1' === addressArray[index].types[0]) {
                state = addressArray[index].long_name;
                return state;
            }
        // }
      }
    }


    

    onMarkerDragEnd = (e) => {
      let newLat = e.latLng.lat();
      let newLng = e.latLng.lng();

      Geocode.fromLatLng(newLat, newLng)
      .then((res) => {
        console.log('res', res);
        const address = res.results[0].formatted_address,
          addressArray = res.results[0].address_components,
           city = this.getCity(addressArray),
           area = this.getArea(addressArray),
           state = this.getState(addressArray)
        
          this.setState({
            address: (address) ? address : "",
            city: (city) ? city : "",
            area: (area) ? area : "",
            state: (state) ? state : "",

            markerPosition: {
              lat: newLat,
              lng: newLng
            },
            mapPosition: {
              lat: newLat,
              lng: newLng
            }
          });
        });
    }

    onPlaceSelected = place => {
      const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      area = this.getArea(addressArray),
      state = this.getState(addressArray),
      newLat = place.geometry.location.lat(),
      newLng = place.geometry.location.lng()

      this.setState({
        address: (address) ? address : "",
        city: (city) ? city : "",
        area: (area) ? area : "",
        state: (state) ? state : "",
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
      const MapWithAMarker = withScriptjs(
        withGoogleMap(props => (
          <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng}}
          >
            <Marker
              position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
              draggable={true}
              onDragEnd={this.onMarkerDragEnd}
            >
              <InfoWindow>
                <div>You Are Here</div>
              </InfoWindow>
            </Marker>


            <AutoComplete
              style={ {width: "100%", height: "40px" }}
              onPlaceSelected={this.onPlaceSelected}
              types={['(regions)']}
            />
          </GoogleMap>
        ))
      );

      return (
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDWRrh9zLyd_Xu6eMqomtLpTDFNX-O_y4A&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      );
    }
}

export default Map;