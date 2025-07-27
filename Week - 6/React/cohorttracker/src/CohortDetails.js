import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const statusStyle = {
    color: props.status.toLowerCase() === 'ongoing' ? 'green' : 'blue',
    fontWeight: 'bold'
  };

  return (
    <div className={styles.box}>
      <h3 style={statusStyle}>{props.name}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{props.startDate}</dd>

        <dt>Current Status</dt>
        <dd>{props.status}</dd>

        <dt>Coach</dt>
        <dd>{props.coach}</dd>

        <dt>Trainer</dt>
        <dd>{props.trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
