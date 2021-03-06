import styled from 'styled-components';

export const HamburgerContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 70px;
  cursor: pointer;
  transform: scale(0.4);
  transform-origin: right;
`;

export const HamburgerItem = styled.span`
  background: #000;
  border-radius: 10px;
  height: 7px;
  margin: 7px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  :nth-of-type(1) {
    width: 50%;
  }

  :nth-of-type(2) {
    width: 100%;
  }

  :nth-of-type(3) {
    width: 75%;
  }
`;

export const HamburgerInput = styled.input`
  display: none;

  :checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotateZ(-45deg) translate(-8px, 0px);
  }

  :checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotateZ(45deg);
  }

  :checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(-32px, -10px) rotateZ(-45deg);
  }
`;
