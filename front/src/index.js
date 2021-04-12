import React from 'react';
import ReactDOM from 'react-dom';

import JobForm from './components/JobForm';
import JobsList from './components/JobsList';

ReactDOM.render(
  <>
    <JobForm /> <hr /> <JobsList />
  </>,
  document.getElementById('root')
);
