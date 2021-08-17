import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import PageWrapper from '../PageWrapper';

const Page = (props) => {
  const {
    pageContext: { page_title, page_description },
  } = props;

  return (
    <PageWrapper page_metadata={{ page_title, page_description }}>
      <PageTemplate {...props} />
    </PageWrapper>
  );
};

export default Page;
