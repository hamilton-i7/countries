import React from 'react';
import { HOME_PATH } from '../../App';
import { StyledButton } from '../general/Button.style';

export default function CountryDetailsHeader({ className }) {
  return (
    <header className={className}>
      <StyledButton text="Back" linkTo={HOME_PATH} backVariant />
    </header>
  );
}
