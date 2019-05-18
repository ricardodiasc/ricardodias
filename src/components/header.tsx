import * as React from 'react';
import { graphql, StaticQuery} from 'gatsby';

interface HeaderProps {
    name:string,
    tagline:string,
    styles:any
}


export default class Header extends React.Component<HeaderProps,{}> {


    constructor(props:HeaderProps) {
        super(props);
    }

    private queryTitle() {
        return (
            <StaticQuery query={graphql`
                query {
                    site {
                        siteMetadata {
                            name
                            tagline
                            description
                        }
                    }
                }
            `} />);
    }

    public render() : JSX.Element {
        this.queryTitle();
        const { name, tagline, styles } = this.props;
        
        return (
            
            <div>
                <div className={styles.container}>
                    <h1>{ name }</h1>
                    <p>{ tagline }</p>
                </div> 
            </div>
        )
    }
}