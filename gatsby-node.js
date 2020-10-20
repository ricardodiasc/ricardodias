const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async({ graphql, actions, reporter}) => {
  const {createPage} = actions;

  const blogPost = path.resolve( './src/templates/blogPost.tsx');


  const result = await graphql(`
    {
      allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 1000
      ) {
        nodes {
          id
          frontmatter {
            path
          }
        }
      }
    }
  `);

  if(result.errors) {
    reporter.panicOnBuild('Erro ao carregar os posts', result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  if(posts.length > 0) {
    posts.forEach((post, index) => {
      const previusPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId = index === posts.length -1 ? null : posts[index + 1].id;
      
      createPage({
        path: post.frontmatter.path,
        component: blogPost,
        context: {
          id: post.id,
          previusPostId: previusPostId,
          nextPostId: nextPostId
        }
      })
      
    });
  }
}
