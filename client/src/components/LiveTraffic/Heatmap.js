// import React from 'react';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import HeatmapLayer from '../LeafletHeat/LeafletHeat';
// import { addressPoints } from './data.js';
//
// export default class Heatmap extends React.Component {
//
//   render() {
//     return (
//       <div>
//         <Map center={[0,0]} zoom={13}>
//           <HeatmapLayer
//             fitBoundsOnLoad
//             fitBoundsOnUpdate
//             points={addressPoints}
//             longitudeExtractor={m => m[1]}
//             latitudeExtractor={m => m[0]}
//             intensityExtractor={m => parseFloat(m[2])} />
//           <TileLayer
//             url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           />
//         </Map>
//       </div>
//     );
//   }
//
// }
