import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Less.css';

const SurveyForm = () => {
  const [enrollment, setEnrollment] = useState('');
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  const handleEnrollmentChange = (event) => {
    setEnrollment(event.target.value);
  };

  const handleLikesChange = (event) => {
    const value = event.target.value;
    if (likes.includes(value)) {
      setLikes(likes.filter((item) => item !== value));
    } else {
      setLikes([...likes, value]);
    }
  };

  const handleDislikesChange = (event) => {
    const value = event.target.value;
    if (dislikes.includes(value)) {
      setDislikes(dislikes.filter((item) => item !== value));
    } else {
      setDislikes([...dislikes, value]);
    }
  };

  const handleSubmit = (event) => {
    if (!enrollment || (enrollment === 'ParentToddlerPrograms' && (!likes.length || !dislikes.length))) {
      event.preventDefault();
      window.alert('Please answer all questions before submitting.');
    }
  };

  return (
    <div className="survey-form">
      <h2>0-3 Years Old</h2>
      <div className="survey--option">
        <label>
          Which programs is your child enrolled in?
          <select value={enrollment} onChange={handleEnrollmentChange} required className="survey--select">
            <option value="" className="survey--select--options" required>
              select
            </option>
            <option value="Preschool">Preschool</option>
            <option value="School">School</option>
            <option value="ParentToddlerPrograms">Parent - toddler programs</option>
            <option value="OtherClasses">Other classes - sports, cultural, etc.</option>
          </select>
        </label>
      </div>
      {enrollment === 'ParentToddlerPrograms' && (
        <div className="select--c">
          <h6 className="select--c--heading">1A What do you like best about the parent-toddler program? (Multi-correct Question)</h6>
          <div className="select--c--container">
            <label className="select--c--label">
              <input type="checkbox" value="AgeAppropriateStructuredActivities" onChange={handleLikesChange} required />
              Age-appropriate structured activities
            </label>
            <label className="select--c--label">
              <input type="checkbox" value="SocialInteractionForChildren" onChange={handleLikesChange} required />
              Social interaction for children
            </label>
            <label className="select--c--label">
              <input type="checkbox" value="MeetingParentsWithSimilarAgedKids" onChange={handleLikesChange} required />
              Meeting parents with similar-aged kids
            </label>
            <label className="select--c--label">
              <input type="checkbox" value="PlayInASafeEnvironment" onChange={handleLikesChange} required />
              Play in a safe environment
            </label>
            <label className="select--c--label">
              <input type="checkbox" value="ExpertFacilitatorsAskQuestions" onChange={handleLikesChange} required />
              Expert facilitators ask questions about the child’s growth
            </label>
            <label className="select--c--label">
              <input type="checkbox" value="PreparationForPreschool" onChange={handleLikesChange} required />
              Preparation for preschool - getting comfortable with the space
            </label>
          </div>
        </div>
      )}
      {enrollment === 'ParentToddlerPrograms' && (
        <div>
          <h6>1B What do you not like about the parent-toddler program? (Multi-correct Question)</h6>
          <div className="select--c--container">
            <label className="select--c--label1">
              <input type="checkbox" value="NotDesignedForBothParents" onChange={handleDislikesChange} required />
              Not designed for both parents
            </label>
            <label className="select--c--label1">
              <input type="checkbox" value="VeryExpensive" onChange={handleDislikesChange} required />
              Very expensive
            </label>
            <label className="select--c--label1">
              <input type="checkbox" value="NotFlexibleWithSchedules" onChange={handleDislikesChange} required />
              Not flexible with parents’ schedules
            </label>
            <label className="select--c--label1">
              <input type="checkbox" value="ActivitiesNotAgeAppropriate" onChange={handleDislikesChange} required />
              Activities not necessarily age-appropriate
            </label>
          </div>
        </div>
      )}
      <Link to={`/End`}>
        <button className="view-results" onClick={handleSubmit}>
          Submit
        </button>
      </Link>
    </div>
  );
};

export default SurveyForm;
