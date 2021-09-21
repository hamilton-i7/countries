import React from 'react';
import { StyledButton } from './Button.style';
import notFoundImage from '../../design/not-found.svg';

export default function NotFound({ className }) {
  return (
    <main className={className}>
      <img src={notFoundImage} alt="Not found" />
      <div>
        <h1>
          <span>Oops,</span> <span>nothing</span> here...
        </h1>

        <StyledButton text="Go to main page" />
      </div>
    </main>
  );
}
