module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'TV Bland',
    titleTemplate: 'TV Bland - %s',
    meta: [
      {
        name: 'description',
        content: 'TV Bland description',
      },
    ],
  },
};
