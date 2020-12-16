import * as React from "react";
import Layout from '../components/Layout';
import PostList from '../components/PostList';



export default class IndexPage extends React.Component {
    public render() {
        return (
          <Layout>
              <PostList />
          </Layout>
        );
    }
}

