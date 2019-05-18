import * as React from 'react';
import { graphql } from "gatsby";

interface PostListProps {
    data : {
        allMarkdownRemark: {
            edges: {
                node: {
                    frontmatter: {
                        title: string;
                    }
                }
            }
        }
    }
}
export const postListQuery = graphql`
    query  {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                }
              } 
            }
          }
    }
`;

export default class PostList extends React.Component<PostListProps, {}> {

    render() {
        // const { edges } = this.props.data.allMarkdownRemark;
        console.log(this.props)
        return(
            <div>
               Test

            </div>
            
        )
    }
}
