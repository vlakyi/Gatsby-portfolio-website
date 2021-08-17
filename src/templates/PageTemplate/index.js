import React from 'react';

import Section from '../../components/Section';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { StyledLayout, StyledTitle } from './StyledPageTemplate';
import useMobile from '../../hooks/useMobile';

const PageTemplate = ({
  pageContext: {
    images,
    section_type,
    page_color,
    text_color,
    page_header,
    footer_text,
  },
  location: { pathname },
}) => {
  const isMobile = useMobile();

  return (
    <StyledLayout background_color={page_color}>
      {!isMobile && (
        <StyledTitle text_color={text_color}>{page_header}</StyledTitle>
      )}
      <Navigation
        currentPath={pathname}
        text_color={text_color}
        page_header={page_header}
      />
      <Section
        images={images}
        section_type={section_type}
        text_color={text_color}
      />
      <Footer footer_text={footer_text} text_color={text_color} />
    </StyledLayout>
  );
};

export default PageTemplate;
