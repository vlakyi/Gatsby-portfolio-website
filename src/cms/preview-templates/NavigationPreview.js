import React from 'react';
import useMobile from '../../hooks/useMobile';
import { Suspense } from 'react';
import Loader from '../../components/Loader';

const NavigationTemplateDesktop = React.lazy(() =>
  import('../../templates/NavigationTemplateDesktop')
);
const NavigationTemplateMobile = React.lazy(() =>
  import('../../templates/NavigationTemplateMobile')
);

const NavigationPreview = ({ navList, ...props }) => {
  const isMobile = useMobile();

  return (
    <Suspense fallback={<Loader />}>
      {isMobile ? (
        <NavigationTemplateMobile {...props} navList={navList} />
      ) : (
        <NavigationTemplateDesktop {...props} navList={navList} />
      )}
    </Suspense>
  );
};

export default NavigationPreview;
