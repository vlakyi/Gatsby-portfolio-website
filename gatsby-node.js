const uuid = require('uuid');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              images {
                image_alt
                image_src {
                  childImageSharp {
                    gatsbyImageData(
                      blurredOptions: { width: 100 }
                      placeholder: BLURRED
                      layout: CONSTRAINED
                      width: 450
                      quality: 100
                    )
                  }
                }
              }
              main_page
              page_color
              page_description
              page_header
              page_route
              page_title
              section_type
              text_color
              footer_text
            }
          }
        }
      }
    }
  `);

  const {
    allMarkdownRemark: { edges },
  } = data;

  edges.forEach(({ node }) => {
    const {
      id,
      frontmatter: {
        images,
        section_type,
        page_title,
        page_description,
        page_route,
        page_header,
        main_page,
        page_color,
        text_color,
        footer_text,
      },
    } = node;

    const page_props = {
      id,
      page_title,
      page_description,
      page_route,
      page_header,
      images,
      section_type,
      main_page,
      page_color,
      text_color,
      footer_text,
    };

    page_props.images.forEach((image) => (image.image_id = uuid.v4()));

    const path = main_page ? '/' : page_props.page_route;

    createPage({
      path,
      component: require.resolve('./src/components/Page'),
      context: page_props,
    });
  });
};
