import styled from 'styled-components';

export const StyledNavigationContainer = styled.nav`
  width: 100%;
  background-color: ${(props) => props.background_color || '#FFF'};
  position: sticky;
  top: 0;
`;

export const StyledListContainer = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 30px;
  max-width: 1400px;
  padding: 20px 0;
  margin: 0 auto 40px auto;
`;

export const StyledListElement = styled.li`
  font-weight: ${(props) => (props.isCurrentRoute ? 'bold' : 'unset')};
  font-size: 1.1rem;
`;

export const StyledLink = styled.a`
  color: ${(props) => props.text_color || '#000'};
  text-transform: uppercase;
`;
