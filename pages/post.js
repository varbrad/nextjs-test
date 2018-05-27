import Layout from "../layouts/default";
import { withRouter } from "next/router";

const Post = props => {
  const query = props.router.query;
  console.log(props.router);
  return (
    <Layout>
      <h1>{query.title}</h1>
      <p>Blog content</p>
    </Layout>
  );
};

export default withRouter(Post);
