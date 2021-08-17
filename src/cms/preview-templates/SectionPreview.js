import React from 'react';
import {
  StyledSectionContainer,
  StyledImagesContainer,
} from '../../components/Section/StyledSection';

const SectionPreview = ({ text_color, section_type, images }) => {
  return (
    <StyledSectionContainer text_color={text_color}>
      <StyledImagesContainer type={section_type}>
        {images?.map(({ image_src, image_alt, image_id }) => (
          <img src={image_src} key={image_id} alt={image_alt} />
        ))}
      </StyledImagesContainer>
    </StyledSectionContainer>
  );
};

export default SectionPreview;
