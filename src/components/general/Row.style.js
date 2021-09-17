import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: ${props => props.verticalAlignment};
  justify-content: ${props => props.horizontalArrangement};
`;

export default Row;
