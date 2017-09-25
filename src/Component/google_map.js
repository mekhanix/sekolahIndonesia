import React, {Component} from 'react';
import { GoogleMap, Marker, withGoogleMap}from 'react-google-maps';

const MapMarker = (withGoogleMap)(
    props => {
        console.log(parseFloat(props.lat,10))
        console.log(parseFloat(props.lng,10))
        return (
            <GoogleMap 
            defaultZoom={18}
            center={{ lat: parseFloat(props.lat,10), lng:  parseFloat(props.lng,10) }}
            >
            <Marker
                position={{ lat: parseFloat(props.lat,10), lng: parseFloat(props.lng,10) }}
            />
            </GoogleMap>

        )
    }
)

class GMap extends Component{

    shouldComponentUpdate(nextProps, nextState){
        console.log("next props",nextProps)
        console.log("current props",this.props)
        if (nextProps === this.props) {
            console.log('sama')
            return false;
        }else {
            console.log('tidak sama')
            return true;
        }
    }

    render() {
        return <MapMarker
                lat={this.props.lat}
                lng={this.props.lng}
                containerElement={
                  <div style={{ height: `500px` }} />
                }
                mapElement={
                  <div style={{ height: `500px` }} />
                }
            />
    }
}

export default GMap;