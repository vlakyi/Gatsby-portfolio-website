import React from 'react';
import { StyledSectionContainer, StyledImagesContainer } from './StyledSection';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Section = ({ text_color, section_type, images }) => {
  return (
    <StyledSectionContainer text_color={text_color}>
      <StyledImagesContainer type={section_type}>
        {images?.map(({ image_src, image_alt, image_id }) => {
          const image = getImage(image_src);
          return (
            <GatsbyImage
              objectFit='contain'
              image={image}
              key={image_id}
              alt={image_alt}
            />
          );
        })}
      </StyledImagesContainer>
    </StyledSectionContainer>
  );
};

export default Section;
