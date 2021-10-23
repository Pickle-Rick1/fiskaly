const path = require(`path`)

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
    const {data} = await graphql(`
      query AllArticles {
        allMarkdownRemark {
          nodes{
            frontmatter {
              slug
            }
          }
        }
      }
    `)
    data.allMarkdownRemark.nodes.forEach(item => {
        actions.createPage({
            path: item.frontmatter.slug,
            component: path.resolve(`src/templates/article.js`),
            context: {slug: item.frontmatter.slug}
        })
    })
}
