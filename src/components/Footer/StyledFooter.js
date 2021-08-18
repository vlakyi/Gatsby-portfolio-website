import styled from 'styled-components';

export const StyledFooterText = styled.h2`
  margin-top: 3rem;
  font-size: 1rem;
  color: ${(props) => props.text_color || '#000000'};
  text-align: center;
  opacity: 0.8;
`;
