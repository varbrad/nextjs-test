import Layout from "../layouts/default";

const Content = props => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>Blog content</p>
  </div>
);

const Post = props => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);

export default Post;
