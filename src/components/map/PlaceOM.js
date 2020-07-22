import React, {Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class PlaceOM extends Component {

    render(){
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
        const style = {
            width: '60vw',
            height: '60vh',
            position:'relative',
            margin: '0 auto 0 auto'
          }
        return(
            <section className="page-section bg-light" id="map">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">מיקום</h2>
                        <h3 className="section-subheading text-muted">הפנינים 14, אשקלון</h3>
                    </div>
                
                    <div className="text-center" style={style}>
                    <Map
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{ lat: 31.661, lng: 34.599}}
                    >
                        <Marker position={{ lat: 31.661743, lng: 34.599010}} />
                    </Map>
                    </div>
                </div>
            </section>
        )
    }
}

export default GoogleApiWrapper({
      apiKey: 'AIzaSyAtZKn_xAs-3snb-5sbJie_vR7ohmDZ1hw',
      language: 'he',
    })(PlaceOM)