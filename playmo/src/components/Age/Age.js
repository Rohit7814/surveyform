import React from 'react';
import { Link } from 'react-router-dom';
import './Age.css';

const Age = () => {
  const [age, setAge] = React.useState('');

  const onChangeHandle = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    if (!age) {
      event.preventDefault();
      window.alert('Please enter your age before proceeding.');
    }
  };

  return (
    <div className='age--page'>
      <h1>Welcome</h1>
      <div className='age--container'>
        <h2 className='age--heading'>Enter the correct age</h2>
        <input type='number' onChange={onChangeHandle} placeholder='Enter the age' className='age--input' />
      </div>
      <div className='age--button-con'>
        <Link to={`/Exactage/${age}`} onClick={handleSubmit}>
          <button className='age--button'>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Age;


