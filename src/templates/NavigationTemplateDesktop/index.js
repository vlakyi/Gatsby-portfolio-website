import React from 'react';

import {
  StyledNavigationContainer,
  StyledListContainer,
  StyledListElement,
  StyledLink,
} from './StyledNavigation';

const NavigationTemplateDesktop = ({ navList, currentPath, text_color }) => {
  const { page_color } = navList.find((el) => el.page_route === currentPath);

  return (
    <StyledNavigationContainer background_color={page_color}>
      <StyledListContainer background_color={page_color}>
        {navList.map(({ id, page_title, page_route }) => (
          <StyledListElement
            key={id}
            isCurrentRoute={page_route === currentPath}
          >
            <StyledLink href={`${page_route}`} text_color={text_color}>
              {page_title}
            </StyledLink>
          </StyledListElement>
        ))}
      </StyledListContainer>
    </StyledNavigationContainer>
  );
};

export default NavigationTemplateDesktop;
