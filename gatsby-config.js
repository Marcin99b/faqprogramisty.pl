const siteUrl = process.env.URL || `https://www.faqprogramisty.pl/`
const siteUrlNoSlash = siteUrl.trim("/")

module.exports = {
  siteMetadata: {
    title: `Faq Programisty`,
    description: `Zbiór odpowiedzi na najczęściej zadawane pytania w branży IT`,
    siteUrl: siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
  allSitePage {
    edges {
      node {
        path
      }
    }
  }
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
`,
        resolveSiteUrl: () => siteUrl,
        serialize: ({ allSitePage, allMarkdownRemark }) => {
          let pages = []
          allSitePage.edges.map(edge => {
            pages.push({
              url: siteUrlNoSlash + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            })
          })
          allMarkdownRemark.edges.map(edge => {
            pages.push({
              url: `${siteUrlNoSlash}/${edge.node.fields.slug}`,
              changefreq: `daily`,
              priority: 0.7,
            })
          })

          return pages
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-9LC3PXBFQW`],
      },
    },
    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        // String value for your clarity project id
        // Project id is found in your clarity dashboard url
        // https://clarity.microsoft.com/projects/view/{clarity_project_id}/
        clarity_project_id: "e7t37l92kd",
        // Boolean value for enabling clarity while developing
        // true will enable clarity tracking code on both development and production environments
        // false will enable clarity tracking code on production environment only
        //
        enable_on_dev_env: true,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Faq programisty RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Faq programisty`,
        short_name: `Faq programisty`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: "src/images/logo.png",
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
