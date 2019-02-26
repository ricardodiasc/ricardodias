import * as React from "react";
import * as styles from './index.module.scss';
import { graphql } from "gatsby";

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
            <div className={styles.container}>
                <h1>{ name }</h1>
                <p>{ tagline }</p>
            </div>
        )
    }
}

