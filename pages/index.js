import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/about">
      <a style={{ fontSize: 32 }}>to About</a>
    </Link>
    <Link href="/about">
      <button>Goto about</button>
    </Link>
    <p>Hello!</p>
  </div>
);

export default Index;
