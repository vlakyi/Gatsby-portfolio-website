import React from 'react';

import { StyledFooterText } from './StyledFooter';

const Footer = ({ footer_text, text_color }) => {
  return (
    <StyledFooterText text_color={text_color}>{footer_text}</StyledFooterText>
  );
};

export default Footer;
