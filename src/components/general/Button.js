import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ className, text, linkTo = '' }) {
  return (
    <button className={className}>
      <Link to={linkTo}>{text}</Link>
    </button>
  );
}
