import React from 'react';
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'

import Layout from '../components/Layout';

export const IndexPageTemplate = () => <div>Hello World</div>;

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;
