import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div className="max-container  flex items-center justify-between py-3">
        <h1 className="text-4xl font-bold  text-sky-900">Articles</h1>
        <nav className="flex items-center gap-4 ">
          <Link className="nav-list hover:underline" href="/">
            Home
          </Link>
          <Link className="nav-list" href="/articles">
            Articles
          </Link>
          <Link className="nav-list" href="/about">
            About
          </Link>
          <Link className="nav-list" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
