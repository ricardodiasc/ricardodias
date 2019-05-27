import * as React from 'react';
import { graphql } from "gatsby";

interface PostListProps {
    data? : {
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

export const query = graphql`
    query HomePageQuery {
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

    constructor(props:PostListProps) {
        super(props);
    }

    render() {
        // const { edges } = this.props.data.allMarkdownRemark;
        console.log('PostList: ',this.props)
        return(
            <div>
               Test

            </div>
            
        )
    }
}


