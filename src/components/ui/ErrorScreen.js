import React from 'react';

export default function ErrorScreen({ className, imgSrc, message }) {
  return (
    <main className={className}>
      <img src={imgSrc} alt="Not found" />
      <div>
        <h1>{message}</h1>
      </div>
    </main>
  );
}
