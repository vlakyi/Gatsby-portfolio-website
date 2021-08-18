import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useMobile from '../../hooks/useMobile';
import { Suspense } from 'react';
import Loader from '../Loader';

const NavigationTemplateDesktop = React.lazy(() =>
  import('../../templates/NavigationTemplateDesktop')
);
const NavigationTemplateMobile = React.lazy(() =>
  import('../../templates/NavigationTemplateMobile')
);

const Navigation = (props) => {
  const isMobile = useMobile();

  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query NavigationOptionsQuery {
      allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___navigation_order }
      ) {
        edges {
          node {
            id
            frontmatter {
              page_title
              page_route
              page_color
              main_page
            }
          }
        }
      }
    }
  `);

  const navList = edges.map(
    ({
      node: {
        id,
        frontmatter: { page_title, page_route, page_color, main_page },
      },
    }) => {
      return {
        id,
        page_title,
        page_route: main_page ? '/' : `/${page_route}`,
        page_color,
        main_page,
      };
    }
  );

  const isSSR = typeof window === 'undefined';

  return (
    <>
      {!isSSR && (
        <Suspense fallback={<Loader />}>
          {isMobile ? (
            <NavigationTemplateMobile {...props} navList={navList} />
          ) : (
            <NavigationTemplateDesktop {...props} navList={navList} />
          )}
        </Suspense>
      )}
    </>
  );
};

export default Navigation;
