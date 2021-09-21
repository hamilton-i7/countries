import React from 'react';
import imgSrc from '../../design/country-not-found-2.svg';

export default function NoCountries({ className }) {
  return (
    <main className={className}>
      <img src={imgSrc} alt="No countries" />
      <h2>No countries found</h2>
    </main>
  );
}
