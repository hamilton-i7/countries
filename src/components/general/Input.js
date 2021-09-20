import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function Input({ value, onValueChange, placeholder, className }) {
  return (
    <InputContainer>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onValueChange}
        className={className}
      />
      <StyledInputIcon />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  max-width: 48rem;
  position: relative;

  @media (min-width: 650px) {
    flex: 1;
    margin-right: 6rem;
  }
`;

function InputIcon({ className }) {
  return <FontAwesomeIcon icon={faSearch} className={className} />;
}

const StyledInputIcon = styled(InputIcon)`
  color: ${props => props.theme.onSurface};
  font-size: 1.8rem;
  left: 3.2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export default Input;
