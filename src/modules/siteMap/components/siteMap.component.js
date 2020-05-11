import React from 'react'
import { Map, InfoWindow,GoogleApiWrapper,Marker } from 'google-maps-react';
import { Menu,Grid,Container,Image,Segment} from 'semantic-ui-react'




class SiteMap extends React.Component  {
    render(){
        const mapStyles = {
            width: '100%',
            height: '15%',
        }
        
        
        return (
          
           <Menu vertical size="massive"  stackable={true}>
           

                  <Map
                    google={this.props.google}
                    initialCenter={{
                        lat: 41.5757824 ,
                        lng: -3.6979741
                    }} 
                    zoom={15}
                    style={mapStyles}
                  >
                  <Marker position={{ lat: 41.5757824, lng: -3.6979741}} />
                     <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>Open Air Festival</h1>
                         </div>
                    </InfoWindow> 
                </Map>
           
           
            </Menu> 
           
        );
    }
    
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCkHEbaiTQ9cKDfL6_BKW_WP7bkJqTBCeI'
  })(SiteMap);
