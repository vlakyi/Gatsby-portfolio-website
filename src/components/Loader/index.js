import React from 'react';
import { StyledLoaderOverlay, StyledLoader } from './StyledLoader';

const Loader = () => {
  return (
    <StyledLoaderOverlay>
      <StyledLoader />
    </StyledLoaderOverlay>
  );
};

export default Loader;
