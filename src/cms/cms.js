import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.init({
    config: {
        media_library: {
            name: 'cloudinary',
            config: {
                cloud_name: 'dnrvhlddk',
                api_key: '745536962636175',
                default_transformations: [
                    [
                        {
                            width: 2000,
                            quality: 80,
                            crop: 'limit',
                        },
                    ],
                ],
            },
        },
        media_folder: '/static/uploads',
        public_folder: '/uploads',
        collections: [

        ]
    },
});

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
