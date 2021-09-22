import React from 'react';
import DotLoader from 'react-spinners/DotLoader';

export default function Loader({ className, loading }) {
  return (
    <main className={className}>
      <DotLoader loading={loading} size={150} color="#ddd" />
    </main>
  );
}
