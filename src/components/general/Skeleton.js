import React from 'react';
import { StyledShimmer } from './Shimmer.style';

export default function Skeleton({ className }) {
  return (
    <div className={className}>
      <StyledShimmer />
    </div>
  );
}
