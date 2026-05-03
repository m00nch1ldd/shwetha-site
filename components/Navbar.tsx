import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 flex gap-4 border-b">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/knowledge">Knowledge</Link>
      <Link href="/creative">Creative</Link>
      <Link href="/fitness">Fitness</Link>
    </nav>
  );
}