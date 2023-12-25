import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Greater.css';

const Greater = () => {
  const [enrollment, setEnrollment] = useState('');
  const [playFrequency, setPlayFrequency] = useState('');

  const handleEnrollmentChange = (event) => {
    setEnrollment(event.target.value);
  };

  const handlePlayFrequencyChange = (event) => {
    setPlayFrequency(event.target.value);
  };

  const handleSubmit = (event) => {
    if (!enrollment || !playFrequency) {
      event.preventDefault(); // Prevent navigation
      window.alert('Please select options for all questions before submitting.');
    } 
  };

  return (
    <div className='great--parent'>
      <h1 className='great--heading'>3 Years and Above </h1>

      <div className='quiz--container1'>
        <ul className="quiz">
          <li>
            <h4>Which programs is your child enrolled in?</h4>
            <ul className='quiz--ul'>
              <li>
                <label>
                  <input type="radio" name="program" value="Preschool" onChange={handleEnrollmentChange} />
                  <span>Preschool</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="program" value="School" onChange={handleEnrollmentChange} />
                  <span>School</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="program"
                    value="OtherClasses"
                    onChange={handleEnrollmentChange}
                  />
                  <span>Other classes - sports, cultural, etc.</span>
                </label>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className='quiz--container1'>
        <ul className="quiz">
          <li>
            <h4>How often does your child play with other similar-age kids, apart from school/classes?</h4>
            <ul className="quiz--ul">
              <li>
                <label>
                  <input type="radio" name="test" value="AlmostDaily" onChange={handlePlayFrequencyChange} />
                  <span>Almost daily</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="test" value="AFewTimesAWeek" onChange={handlePlayFrequencyChange} />
                  <span>A few times a week</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="test" value="OnceAWeek" onChange={handlePlayFrequencyChange} />
                  <span>Once a week</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="test" value="OnceAMonth" onChange={handlePlayFrequencyChange} />
                  <span>Once a month</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="test" value="AFewTimesAMonth" onChange={handlePlayFrequencyChange} />
                  <span>A few times a month</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="test" value="Rarely" onChange={handlePlayFrequencyChange} />
                  <span>Rarely</span>
                </label>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <Link to={`/End`} onClick={handleSubmit}>
        <button className="view-results">Submit</button>
      </Link>
    </div>
  );
};

export default Greater;
