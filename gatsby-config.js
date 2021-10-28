module.exports = {
  siteMetadata: {
    title: "Portfolio and CV",
    siteUrl: "https://my-portfolio-euzccrj2l-stevechez.vercel.app",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `source sans pro\:300,400,600`],
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
