import React, { useState } from 'react';
import { MyChart } from './MyChart';
import { Inputs } from './Inputs';

export const Content = () => {
  let [location, setLocation] = useState('');

  return (
    <div className="Content">
      {location ? <p>{location}</p> : <p>Choose location</p>}
      <div className="flex">
        <Inputs location={location} setLocation={setLocation} />
        <MyChart />
        <button>Submit</button>
      </div>
    </div>
  );
};
