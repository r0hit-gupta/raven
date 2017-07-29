import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import red_light from '../../images/red_light.png';
import green_light from '../../images/green_light.png';
import ambulance from '../../images/ambulance.png';

class Lights extends Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  move() {
    this.setState(prevState => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.move(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return(
      <img src={ambulance} style={{width: 20}} />
    );
  }
}

export default class LiveTraffic extends Component {
  static defaultProps = {
    center: { lat: 30.7263911, lng: 76.7592896 },
    zoom: 14
  };

  constructor(props) {
    super(props);
    this.state = { lat: 30.718368, lng: 76.811935 };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.move(), 200);
  }
  move(){
    this.setState((prevState) => ({
      lat: prevState.lat+0.0001
    }));
  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        layerTypes={['TrafficLayer']}
        options={{ styles: style }}
      >
        <Lights lat={this.state.lat} lng={this.state.lng} />
      </GoogleMapReact>
    );
  }
}

const style = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#7c93a3'
      },
      {
        lightness: '-10'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#a0a4a5'
      }
    ]
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#62838e'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#dde3e3'
      }
    ]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#3f4a51'
      },
      {
        weight: '0.30'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'poi.business',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.government',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'poi.place_of_worship',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.school',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.sports_complex',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: '-100'
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#bbcacf'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        lightness: '0'
      },
      {
        color: '#bbcacf'
      },
      {
        weight: '0.50'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#a9b4b8'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        invert_lightness: true
      },
      {
        saturation: '-7'
      },
      {
        lightness: '3'
      },
      {
        gamma: '1.80'
      },
      {
        weight: '0.01'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a3c7df'
      }
    ]
  }
];
