import Link from "next/link";

import Layout from "../layouts/default";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <h1>My cool blog</h1>
    <ul>
      <PostLink title="Cool blog post" />
      <PostLink title="Aliens!!11!1!" />
    </ul>
  </Layout>
);

export default Index;
