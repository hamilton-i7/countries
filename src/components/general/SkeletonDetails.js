import React from 'react';
import {
  StyledSkeletonButton,
  StyledSkeletonFlag,
  StyledSkeletonText,
  StyledSkeletonTitle,
} from './Skeleton.style';

export default function SkeletonDetails({ className }) {
  return (
    <main className={className}>
      <StyledSkeletonFlag />
      <section>
        <StyledSkeletonTitle />
        <div>
          <ul>
            <li>
              <span>Native name:</span> <StyledSkeletonText />
            </li>
            <li>
              <span>Population:</span> <StyledSkeletonText />
            </li>
            <li>
              <span>Region</span> <StyledSkeletonText />
            </li>
            <li>
              <span>Sub Region:</span> <StyledSkeletonText />
            </li>
            <li>
              <span>Capital:</span> <StyledSkeletonText />
            </li>
          </ul>
          <ul>
            <li>
              <span>Top Level Domain:</span> <StyledSkeletonText />
            </li>
            <li>
              <span>Currencies:</span> <StyledSkeletonText />
            </li>
            <li>
              <span>Languages:</span> <StyledSkeletonText />
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <span>Border Countries:</span>
            <div>
              {[1, 2, 3].map(n => (
                <StyledSkeletonButton key={n} />
              ))}
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
