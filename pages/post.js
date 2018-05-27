import Layout from "../layouts/default";
import { withRouter } from "next/router";

const Post = props => {
  const { show } = props;
  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      <img src={show.image.medium} />
    </Layout>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();
  console.log(`Fetched show: ${data.name}`);
  return { show: data };
};

export default withRouter(Post);
