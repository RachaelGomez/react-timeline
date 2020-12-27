import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  <div>
    <ul>
      <li>{props.person}</li>
      <li>{props.event}</li>
      <li>{props.timeStamp}</li>
    </ul>
  </div>
  
  return;
};

TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default TimelineEvent;