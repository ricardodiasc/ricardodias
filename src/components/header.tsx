import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import * as styles from './index.module.scss';


interface HeaderProps {
    name?:string,
    tagline?:string,
    styles?:any
};

export default class Header extends React.Component<HeaderProps,{}> {


    constructor(props:HeaderProps) {
        super(props);
    }


    public render() : JSX.Element {
        return (
          <div id="header">
            <StaticQuery
              query={graphql`
                query queryHeader {
                  site {
                    siteMetadata {
                      name
                      tagline
                      description
                    }
                  }
                }
              `}
              render={(data) => (
                <>
                  <h1><Link to="/" className={styles.homeLink}>{data.site.siteMetadata.name}</Link></h1>
                  <p>{data.site.siteMetadata.tagline}</p>
                </>
              )}
            />
          </div>
        );
    }
}