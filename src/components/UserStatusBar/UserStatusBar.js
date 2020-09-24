import React from 'react';
import StarsIcon from '@material-ui/icons/Stars';

export default function UserStatusBar() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FFB565',
        width: '38%',
        height: '100px',
        marginTop: '26px',
      }}
    >
      <StarsIcon style={{ color: '#EFEFEF', fontSize: '50px' }} />
      <div>
        <h2>10</h2>
        <h5 style={{ color: '#EFEFEF' }}>Conquer Coins</h5>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ion-icon
          style={{
            fontSize: '50px',
            color: '#cd7f32',

            borderRadius: '5px',
            padding: '3px',
          }}
          name='medal-outline'
        ></ion-icon>
        <h5>Bronze</h5>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ion-icon
          style={{
            fontSize: '50px',
            color: '#C0C0C0',

            borderRadius: '5px',
            padding: '3px',
          }}
          name='medal-outline'
        ></ion-icon>
        <h5>Silver</h5>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ion-icon
          style={{
            fontSize: '50px',
            color: '#FFD700',

            borderRadius: '5px',
            padding: '3px',
          }}
          name='medal-outline'
        ></ion-icon>
        <h5>Gold</h5>
      </div>
    </div>
  );
}
