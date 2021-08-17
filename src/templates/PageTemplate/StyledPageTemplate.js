import styled from 'styled-components';

export const StyledLayout = styled.section`
  background-color: ${(props) => props.background_color || 'white'};
  color: ${(props) => props.text_color || 'black'};
  min-height: 100vh;
  padding-bottom: 3rem;
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 3rem 0 1rem 0;
  color: ${(props) => props.text_color || '#000'};
  max-width: 16ch;
  margin: 0 auto;
`;
