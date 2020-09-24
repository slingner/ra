import React from 'react';
import './AdditionRoute.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

export default function AdditionRoute() {
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className='addition-wrapper '>
      <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
        <Button style={{ margin: '3rem' }} variant='contained'>
          BACK
        </Button>
      </Link>
      <div
        style={{
          marginLeft: '32%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '40px' }}>5+5=</h1>
        <TextField
          style={{ marginLeft: '1rem' }}
          value={name}
          onChange={handleChange}
          required
          id='standard-required'
          placeholder='Answer Here'
        />
      </div>
    </div>
  );
}
