import React from 'react';
import './Thankyou.css';
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <div className="th--container">
      <h1 className='th--head'>Thank you for the Submission</h1>

      <Link to={`/`}>
        <button className="home">Home</button>
      </Link>
    </div>
  );
};

export default Thankyou;
