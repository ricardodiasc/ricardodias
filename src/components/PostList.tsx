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
    console.log("PostList: ", this.props);
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
              {data.allMarkdownRemark.edges.map(e => (
                <PostItem
                  key={e.node.frontmatter.title}
                  title={e.node.frontmatter.title}
                />
              ))}
            </>
          )}
        />
      </>
    );
  }
}
