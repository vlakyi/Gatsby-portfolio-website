import React from 'react';

import SectionPreview from './SectionPreview';
import NavigationPreview from './NavigationPreview';

import {
  StyledLayout,
  StyledTitle,
} from '../../templates/PageTemplate/StyledPageTemplate';
import useMobile from '../../hooks/useMobile';
import Footer from '../../components/Footer';

const PagePreviewTemplate = ({
  pageContext: {
    images,
    section_type,
    page_color,
    text_color,
    page_header,
    footer_text,
  },
  navProps,
  location: { pathname },
}) => {
  const isMobile = useMobile();

  return (
    <StyledLayout background_color={page_color}>
      {!isMobile && (
        <StyledTitle text_color={text_color}>{page_header}</StyledTitle>
      )}
      <NavigationPreview {...navProps} currentPath={pathname} />
      <SectionPreview
        images={images}
        section_type={section_type}
        text_color={text_color}
      />
      <Footer footer_text={footer_text} text_color={text_color} />
    </StyledLayout>
  );
};

export default PagePreviewTemplate;
