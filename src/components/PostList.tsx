import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import PostItem from "./PostItem";

interface PostListProps {
  data?: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string;
          };
        };
      };
    };
  };
}

export default class PostList extends React.Component<PostListProps, {}> {
  constructor(props: PostListProps) {
    super(props);
  }

  render() {
    // const { edges } = this.props.data.allMarkdownRemark;
    return (
      <>
        <StaticQuery
          query={graphql`
            query {
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
          `}
          render={data => (
            <>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <PostItem
                  key={node.frontmatter.title}
                  title={node.frontmatter.title}
                />
              ))}
            </>
          )}
        />
      </>
    );
  }
}
