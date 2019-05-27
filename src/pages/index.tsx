import * as React from "react";
import { graphql } from "gatsby";

import Header from '../components/header';
import PostList from '../components/PostList';


export default class IndexPage extends React.Component {
    public render() {
        return (
            <div>
                <Header />
                <PostList />
            </div>
        )
    }
}

