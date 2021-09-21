import React from 'react';
import imgSrc from '../../design/country-not-found.svg';

export default function CountryNotFound({ className }) {
  return (
    <main className={className}>
      <img src={imgSrc} alt="Not found" />
      <div>
        <h1>Country not found...</h1>
      </div>
    </main>
  );
}
