import React, { useState } from 'react';
import axios from 'axios';

const Date = () => {
  const [timestamp1, setTimestamp1] = useState('');
  const [timestamp2, setTimestamp2] = useState('');
  const [difference, setDifference] = useState(null);

  const calculateDifference = async () => {
    try {
      const response = await axios.post('http://localhost:8000/calculate-difference', {
        timestamp1,
        timestamp2,
      });

      setDifference(response.data.differenceInSeconds);
    } catch (error) {
      console.error('Error calculating difference:', error);
    }
  };

  return (
    <div className='d-flex align-items-center justify-content-center'>
    <div className=''>
      <div className='d-flex justify-content-center pt-5 '>
      <h1 className='background-with-text' style = {{fontFamily: 'Bebas Neue', fontSize: '100px'}}>Timestamp Difference</h1>
      </div>

      <div className='d-flex justify-content-center pt-5'>
      <input className='px-2 form-control'  type="datetime-local" value={timestamp1} onChange={(e) => setTimestamp1(e.target.value)} />
      <div className='p-1'></div>
      <input className='px-2 form-control' type="datetime-local" value={timestamp2} onChange={(e) => setTimestamp2(e.target.value)} />
      <div className='p-1'></div>
    
      <button className= "btn btn-primary "onClick={calculateDifference}>Calculate</button>
      
      </div>
      <div className='d-flex justify-content-center pt-5'>
      {difference && <h3 className='' style = {{fontFamily: 'Bebas Neue'}}>Difference in seconds: {difference}</h3>}

      </div>
    </div>
    </div>

  );
};

export default Date;