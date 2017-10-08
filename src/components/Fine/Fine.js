import React from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'

export default class Fine extends React.Component {
  render() {
    return (
      <div style={styles.center}>
        <form action="" style={styles.form} className="fine">
            <Input focus placeholder='Enter Plate Number' />
            <Input placeholder='Enter Amount' />
            <Button primary>SEND CHALLAN</Button>
        </form>
      </div>
    );
  }
}

const styles = {
  center: {
      display: 'flex',
      justifyContent: 'center',
      height: '100%'
  },
  form: {
      display: 'flex',
      flexDirection: 'column',
      padding: 20
  }

};
