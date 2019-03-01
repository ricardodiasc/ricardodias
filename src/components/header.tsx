import * as React from 'react';

interface HeaderProps {
    name:string,
    tagline:string,
    styles:any
}
export default class Header extends React.Component<HeaderProps,{}> {

    public render() {
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