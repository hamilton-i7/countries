import { faSadTear } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function NoCountries({ className }) {
  return (
    <div className={className}>
      <FontAwesomeIcon icon={faSadTear} />
      <h2>No countries found</h2>
    </div>
  );
}
