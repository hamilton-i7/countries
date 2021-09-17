import styled from 'styled-components';

const Text = styled.p`
  color: ${props => props.color || props.theme.onBackground};
  font-size: ${props => props.fontSize || '1.2rem'};
  font-weight: 300;
  margin: ${props => props.margin || 0};
`;

export default Text;
