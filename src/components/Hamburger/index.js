import React from 'react';
import {
  HamburgerContainer,
  HamburgerItem,
  HamburgerInput,
} from './StyledHamburger';

const Hamburger = ({ onIconClick }) => {
  return (
    <HamburgerContainer>
      <HamburgerInput type='checkbox' onChange={onIconClick} />
      <HamburgerItem />
      <HamburgerItem />
      <HamburgerItem />
    </HamburgerContainer>
  );
};

export default Hamburger;
