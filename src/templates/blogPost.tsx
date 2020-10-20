import React from 'react';
import { WindowLocation } from "@reach/router"
import { graphql, PageProps } from 'gatsby';

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



const BlogPostTemplate = (props : PageProps ) => {
  const {data} = props;
  console.log(data);
  return (
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div>Apenas mais um template</div>
    </div>
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
