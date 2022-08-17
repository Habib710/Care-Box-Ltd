import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { Component } from 'react'

export class MapContainer extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="py-5">Task - 2</h1>
        <h2 className="p-2"> Distance : 7 Km</h2>

        <Map
          google={this.props.google}
          style={{ width: '700px', height: '500px', position: 'relative' }}
          initialCenter={{
            lat: 23.777176,
            lng: 90.399452,
          }}
          zoom={12}
        >
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'Care-Box Ltd.'}
            position={{ lat: 23.760553125947684, lng: 90.38927467742258 }}
          />
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'Care-Box Ltd.'}
            position={{ lat: 23.813676977644572, lng: 90.42413504023418 }}
          />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB_l72JEbX8bz_A48wkvJDAw6mTHOw5o48',
})(MapContainer)
