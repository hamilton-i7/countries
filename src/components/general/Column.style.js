import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.horizontalAlignment};
  justify-content: ${props => props.verticalArrangement};
  width: ${props => props.width || '100%'};
`;

export default Column;
