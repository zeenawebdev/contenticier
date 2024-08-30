import { TEMPLATE } from "../dashboard/image/_components/ImageTemplateSection";

export const ImageTemplates = [
  {
    name: 'Generative Fill',
    slug: 'generative-fill',
    image:"https://img.freepik.com/free-photo/nature-landscape-with-hand-holding-frame_23-2149389960.jpg?t=st=1724883561~exp=1724887161~hmac=ad8d010603a67108a83b156a3738424deddd1e48f0516531ee451105d33d3f76&w=900",
    desc: 'Change image sizes and fill them automatically using AI.',
    category: 'Image',
    icon: '/fill.svg',
    url: 'c_fill',
    form: [
      {
        label: 'Select size',
        field: 'select',
        name: 'Aspect ratio',
      },
      {
        label: 'Enter Image',
        field: 'image',
        name: 'Image',
      },
    ],
  },
  {
    name: 'Object Remove',
    slug: 'object-remove',
    desc: 'Remove any object from the image by typing its name.',
    category: 'Image',
    icon: '/remove.svg',
    url: 'e_gen_remove',
    form: [
      {
        label: 'Type object name',
        field: 'textarea',
        name: 'Object to remove',
      },
      {
        label: 'Enter Image',
        field: 'image',
        name: 'Image',
      },
    ],
  },
  {
    name: 'Object Recolor',
    slug: 'object-recolor',
    image:'https://img.freepik.com/free-photo/people-posing-with-color-swatches_23-2150038303.jpg?t=st=1724889915~exp=1724893515~hmac=33573f646067c37dbacb635836dd929fd75fc1b29a065a8ed21476d780881441&w=740',
    desc: 'Change the color of objects in an image with the help of AI.',
    category: 'Image',
    icon: '/recoler.svg',
    url: 'e_colorize',
    form: [
      {
        label: 'Type object',
        field: 'textarea',
        name: 'Object to recolor',
      },
      {
        label: 'Add color',
        field: 'textarea',
        name: 'Replacement color',
      },
      {
        label: 'Enter Image',
        field: 'image',
        name: 'Image',
      },
    ],
  },
  {
    name: 'Background Remove',
    slug: 'background-remove',
    image:'https://img.freepik.com/free-photo/front-view-young-lady-white-shirt-black-trousers-holding-blue-white-checkered-shirt-white_140725-16743.jpg?t=st=1724889828~exp=1724893428~hmac=cd66218d722dd50e70f25339a0f83c15a6f74dbaa1ba1b28b8f1d17adca2ba4c&w=900',
    desc: 'Remove the background of the image with a click using AI.',
    category: 'Image',
    icon: '/bgremove.svg',
    url: 'e_background_removal',
    form: [
      {
        label: 'Enter Image',
        field: 'image',
        name: 'Image',
      },
    ],
  },
  {
    name: 'Restore Image',
    slug: 'restore-image',
    image:"https://img.freepik.com/free-photo/combination-facial-features-concept_23-2150039736.jpg?t=st=1724883464~exp=1724887064~hmac=24f9239b625f22202bf7a069b25a107fca5c90ae52530b39240770ca00fec9c3&w=900",
    desc: 'Restore old and damaged images using AI restoration.',
    category: 'Image',
    icon: '/restore.svg',
    url: 'e_restore',
    form: [
      {
        label: 'Enter Image',
        field: 'image',
        name: 'Image',
      },
    ],
  }
];
