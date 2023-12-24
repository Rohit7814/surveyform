import React from 'react';
import { useParams } from 'react-router-dom';
import Greater from '../GreaterThan3/Greater';
import Less from '../LessThan3/Less';
import SurveyForm from '../LessThan3/Less';
const Exactage = () => {
  const { age } = useParams();

  return (
    <div>
    
      {age<3 ? (
      <SurveyForm />
        ) 
    
      :
      
      (
           <Greater />
      )}
    </div>
  );
};

export default Exactage;



