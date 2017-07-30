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
    // this.interval = setInterval(() => this.move(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <img src={ambulance} style={{ width: 20 }} />;
  }
}

export default class AmbulanceTracker extends Component {
  static defaultProps = {
    center: { lat: 30.7263911, lng: 76.7592896 },
    zoom: 14
  };

  constructor(props) {
    super(props);
    this.points = [
      [30.76275, 76.78285],
      [30.76525, 76.78754],
      [30.75994, 76.79197],
      [30.75353, 76.79701],
      [30.74992, 76.79107],
      [30.74663, 76.78577],
      [30.7405, 76.79091],
      [30.73775, 76.78626]
    ];
    this.state = { lat: this.points[0][0], lng: this.points[0][1] };

    this.mark = 0;
    this.move = this.move.bind(this);
  }
  componentDidMount() {
    // this.interpolate(30.75994, 30.76275, 20)
    // this.interval = setInterval(() => this.move(), 200);
    this.move();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  interpolate(v1, v2, step) {
    let arr = [];
    const diff = Math.abs((v1 - v2) / step);
    if (v2 > v1) {
      for (let i = 0; i < step; i++) arr.push(v1 + diff * i);
    } else for (let i = 0; i < step; i++) arr.push(v1 - (diff * i));
    console.log(diff, arr);
    return arr;
}
  move() {
    // console.log('got');
    for(let i = 0; i < this.points.length - 1; i++){
      let lat = this.interpolate(this.points[i][0], this.points[i+1][0], 20);
      let lng = this.interpolate(this.points[i][1], this.points[i+1][1], 20);
      let x = 0;
        setInterval(() => {
          if(x<20){
            this.setState({
            lat: lat[x],
            lng: lng[x]
          });
          x++;
          // console.log(this.state);
        }
        }, 100);
      }

  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        layerTypes={['TrafficLayer']}
        options={{ styles: style }}
        bootstrapURLKeys={{ key: 'AIzaSyAtx_lIJ0GsFLKtlaCsMyo7K7Rq8IeTCx4' }}
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
