import React, { useState, useLayoutEffect } from 'react';
import Hamburger from '../../components/Hamburger';
import {
  StyledOverlay,
  StyledHeader,
  StyledTopContainer,
  StyledListContainer,
  StyledListElement,
  StyledLink,
} from './StyledNavigationTemplateMobile';

const NavigationTemplateMobile = ({
  page_header,
  navList,
  text_color,
  currentPath,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    // Prevent body scroll when navigation overlay is opened
    if (isOpen) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
    }
  }, [isOpen]);

  useLayoutEffect(() => {
    // hide navigation on scroll
    let scrollPos = 0;
    const handleScroll = () => {
      var documentTop = document.body.getBoundingClientRect().top;
      if (!isOpen) {
        if (documentTop >= scrollPos && !isVisible) {
          setIsVisible(true);
        } else if (documentTop < scrollPos && isVisible) {
          setIsVisible(false);
        }
      }
      scrollPos = documentTop;
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, isVisible]);

  return (
    <StyledOverlay isOpen={isOpen} isVisible={isVisible}>
      <StyledTopContainer>
        <StyledHeader text_color={text_color}>{page_header}</StyledHeader>
        <Hamburger onIconClick={toggleIsOpen} />
      </StyledTopContainer>

      <StyledListContainer isOpen={isOpen}>
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
    </StyledOverlay>
  );
};

export default NavigationTemplateMobile;
