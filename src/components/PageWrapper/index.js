import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import { withPrefix } from 'gatsby';
import '../../reset.css';

const PageWrapper = ({ children, page_metadata }) => {
  const site_metadata = useSiteMetadata();
  let title, description;

  if (page_metadata) {
    title = page_metadata.page_title;
    description = page_metadata.page_description;
  } else {
    title = site_metadata.title;
    description = site_metadata.description;
  }

  return (
    <div>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes='16x16'
        />

        <link
          rel='mask-icon'
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color='#ff4400'
        />
        <meta name='theme-color' content='#fff' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta
          property='og:image'
          content={`${withPrefix('/')}img/favicon.svg`}
        />
      </Helmet>
      <>{children}</>
    </div>
  );
};

export default PageWrapper;
