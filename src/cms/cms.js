import CMS from 'netlify-cms-app';
import { ColorControl, ColorPreview } from 'netlify-cms-widget-colorpicker';
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import '../reset.css';
import PagePreview from './preview-templates/PagePreview';

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerWidget('color', ColorControl, ColorPreview);
CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewStyle('../reset.css');
