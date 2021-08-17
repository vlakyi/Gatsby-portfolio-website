import styled from 'styled-components';

const flex = () => {
  return {
    width: 'fit-content',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: '1440px',
    '> img': {
      flexBasis: '25%',
    },
  };
};

export const StyledImagesContainer = styled.div((props) => {
  switch (props.type) {
    case 'grid':
      return flex();
    default:
      return { display: 'block' };
  }
});

export const StyledSectionContainer = styled.section`
  color: ${(props) => props.text_color || 'black'};
  margin: 0 20px;

  @media (max-width: 768px) {
    :first-of-type {
      padding-top: 120px;
    }
  }
`;
