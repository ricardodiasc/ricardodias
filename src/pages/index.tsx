import * as React from "react";
import * as styles from './index.module.scss';
import { graphql } from "gatsby";

import Header from '../components/header';
import PostList from '../components/PostList';

interface IndexPageProps {
    data : {
        site: {
            siteMetadata: {
                name: string;
                tagline: string;
            }
        }
    }
};

export const indexPageQuery = graphql`
    query indexPageQuery {
        site {
            siteMetadata {
                name
                tagline
            }
        }
    }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
    public render() {
        const { name, tagline } = this.props.data.site.siteMetadata;
        return (
            <div>
                <Header name={name} tagline={tagline} styles={styles}/>
                <PostList />
            </div>
        )
    }
}

