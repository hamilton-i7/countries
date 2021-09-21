import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ className, text, linkTo = '' }) {
  return (
    <Link to={linkTo} className={className}>
      {text}
    </Link>
  );
}
