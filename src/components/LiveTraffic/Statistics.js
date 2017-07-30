import React from 'react';

export default class Statistics extends React.Component {
  render() {
    return (
      <div>
        <iframe src={'/stats.html'} style={styles.map} />
      </div>
    );
  }
}

const styles = {
  map: {
    width: '100%',
    height: '82vh',
    border: 'none'
  }
};
