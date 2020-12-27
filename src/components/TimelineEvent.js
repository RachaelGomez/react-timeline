import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  return(
  <div>
    <ul>
      <li className="event-person">{props.person}</li>
      <li className="event-status">{props.status}</li>
      <li className="event-time">{props.timeStamp}</li>
    </ul>
  </div>
  );
  
};

TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default TimelineEvent;