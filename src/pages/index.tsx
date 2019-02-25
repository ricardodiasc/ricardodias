import * as React from "react";
import * as styles from './index.module.scss';


interface IndexPageProps {};

export default class IndexPage extends React.Component<IndexPageProps, {}> {

    public render() {
        return (
            <div className={styles.container}>
                <h1>Hello world!</h1>
                <p>CSS processors are great!</p>
            </div>
        )
    }
}

