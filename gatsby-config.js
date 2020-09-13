module.exports = {
  siteMetadata: {
    title: "Portfolio and CV",
    siteUrl: "http://localhost:8000",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Signika`, `source sans pro\:300,400,600`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "",
        head: false,
      },
    },
  ],
};
