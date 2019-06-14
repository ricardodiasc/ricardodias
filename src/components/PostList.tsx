import * as React from 'react';
import { graphql, StaticQuery } from "gatsby";

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

export default class PostList extends React.Component<PostListProps, {}> {

    constructor(props:PostListProps) {
        super(props);
    }

    render() {
        // const { edges } = this.props.data.allMarkdownRemark;
        console.log('PostList: ',this.props)
        return(
            <>
                <StaticQuery query={graphql`
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
                    render={data=>(
                        <>
                            {data.allMarkdownRemark.edges.map(e => (
                                <div key={e.node.frontmatter.title}>
                                    {e.node.frontmatter.title}
                                </div>
                                )
                            )
                            }
                        </>
                        )
                    } 
                        
                    
                />
              
            </>
            
        )
    }
}


