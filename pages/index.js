import Link from "next/link";

import Layout from "../layouts/default";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <h1>My cool blog</h1>
    <ul>
      <PostLink id="cool-post-1" title="Cool blog post" />
      <PostLink id="aliens-2" title="Aliens!!11!1!" />
    </ul>
  </Layout>
);

export default Index;
