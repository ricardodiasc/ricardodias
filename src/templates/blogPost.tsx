import React from 'react';
import { WindowLocation } from "@reach/router"
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout';

// interface PageQueryData {
//   site: {
//     siteMetadata: {
//       title: string
//     }
//   }
//   allMarkdownRemark: {
//     edges: {
//       node: {
//         id: number
//         frontmatter: {
//           path: string
//           date: string
//           title: string
//         }
//       }
//     }[]
//   }
// }

// type LocationState = WindowLocation["state"];

// interface Props {
//   readonly data: PageQueryData,
//   readonly location: WindowLocation<LocationState>
// }

interface BlogPostInterface {
  markdownRemark: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
    };
  };
}

interface Props {
  readonly data: BlogPostInterface,
}

const BlogPostTemplate = ({data}: Props) => {
  // const {data} = props;
  console.log(data);
  return (
    <Layout>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <section dangerouslySetInnerHTML={{__html: data.markdownRemark.html }}></section>
    </Layout>
  );
};

export default BlogPostTemplate;


export const pageQuery = graphql` 
  query BlogPost(
      $id: String!
    ) {
      
      markdownRemark( id: { eq: $id }) {
        id
        html
        frontmatter {
          title
        }
      }
    }
`;
