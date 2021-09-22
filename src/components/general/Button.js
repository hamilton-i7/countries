import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  className,
  text,
  linkTo = '',
  backVariant = false,
}) {
  return (
    <Link to={linkTo} className={className}>
      {backVariant && <FontAwesomeIcon icon={faLongArrowAltLeft} />}
      {text}
    </Link>
  );
}
