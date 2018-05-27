import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../layouts/default";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    {props.shows.map(({ show }) => {
      return (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      );
    })}
    <style jsx>
      {`
        h1,
        a {
          font-family: monospace;
        }

        ul {
          padding: 0;
        }

        a {
          color: red;
        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  console.log(data.length);
  return {
    shows: data
  };
};

export default Index;
