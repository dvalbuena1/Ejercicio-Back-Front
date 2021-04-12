import React, { useState, useEffect } from 'react';
import Job from './Job';

const JobsList = () => {
  const [state, setState] = useState({ offers: [] });

  useEffect(() => {
    const url = '/offers';
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((offers) => {
        setState({ offers });
      });
  }, []);

  return (
    <div>
      <h2>List of Offers</h2>
      {state.offers.map((e, i) => (
        <Job key={i} offer={e} />
      ))}
    </div>
  );
};

export default JobsList;
