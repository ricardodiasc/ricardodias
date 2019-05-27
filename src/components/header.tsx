import * as React from 'react';
import * as styles from './index.module.scss';
import { graphql, StaticQuery} from 'gatsby';

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
            
            < >
                <StaticQuery query={graphql`
                query queryHeader{
                    site {
                        siteMetadata {
                            name
                            tagline
                            description
                        }
                    }
                }
            `} 
            render={data=>(
                <div className={styles.container}>
                    <h1>{data.site.siteMetadata.name}</h1>
                <p>{data.site.siteMetadata.tagline}</p>
            </div>    
            )}
        />
                 
            </ >
        )
    }
}