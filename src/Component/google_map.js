import React, {Component} from 'react'
import { GoogleMap, Marker, withGoogleMap}from 'react-google-maps'

const MapMarker = (withGoogleMap)(
    props => {
        return (
            <GoogleMap 
                defaultZoom={17}
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
        if (nextProps === this.props) {
            return false
        }else {
            return true
        }
    }

    render() {
        return <MapMarker
            lat={this.props.lat}
            lng={this.props.lng}
            containerElement={
                <div style={{ height: '500px', width: '500px' }} />
            }
            mapElement={
                <div style={{ height: '500px', width: '500px' }} />
            }
        />
    }
}

export default GMap