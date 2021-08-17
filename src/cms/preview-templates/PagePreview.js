import React from 'react';
import StyleSheetManager from './StyledSheets';
import PagePreviewTemplate from './PagePreviewTemplate';
import Loader from '../../components/Loader';

const PagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  const { page_color, page_title, page_route, main_page, text_color } = data;
  const route = main_page ? '/' : `/${page_route}`;

  const navList = [
    { page_title, page_route: route, page_color, main_page },
    {
      id: 'test',
      page_title: 'Test',
      page_route: '/test',
      main_page: false,
      page_color,
    },
  ];
  const pageContext = { ...data };

  if (data) {
    return (
      <StyleSheetManager>
        <PagePreviewTemplate
          pageContext={pageContext}
          location={{ pathname: route }}
          navProps={{
            navList: navList,
            currentPath: { route },
            text_color: { text_color },
          }}
        />
      </StyleSheetManager>
    );
  } else {
    return <Loader />;
  }
};

export default PagePreview;
