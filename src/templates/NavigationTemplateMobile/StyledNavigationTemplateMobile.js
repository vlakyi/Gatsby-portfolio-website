import styled from 'styled-components';

const openedNavigationOverlay = `
  min-height: 100%;  
`;

const closedNavigationOverlay = `
  margin-bottom: 30px;
`;

export const StyledOverlay = styled.nav`
  position: fixed;
  top: ${(props) => (props.isVisible ? '0' : '-100px')};
  left: 0;
  background-color: white;
  padding: 10px 20px;
  min-height: 3%;
  width: 100%;
  transition: min-height, top 200ms linear;
  z-index: 100;
  ${(props) =>
    props.isOpen ? openedNavigationOverlay : closedNavigationOverlay}
`;

export const StyledTopContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeader = styled.h3`
  max-width: 16ch;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.text_color || '#000'};

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

const openedListContainer = `
  visibility: visible;
  opacity: 1;
  margin-top: 30px;
`;

const closedListContainer = `
    visibility: hidden;
    opacity: 0;
    height: 0;
`;

export const StyledListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  transition: opacity 500ms 250ms linear;
  ${(props) => (!props.isOpen ? closedListContainer : openedListContainer)}
`;

export const StyledListElement = styled.li`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: ${(props) => (props.isCurrentRoute ? 'bold' : 'unset')};
  color: ${(props) => props.text_color || '#000'};
`;

export const StyledLink = styled.a``;
