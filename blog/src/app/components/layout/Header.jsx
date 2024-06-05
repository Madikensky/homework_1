import Link from 'next/link';

function Header() {
  return (
    <div className="flex justify-between p-4 text-white bg-red-600 ">
      <h1 className="text-sm md:text-lg lg:text-lg">Blog</h1>
      <div className="flex gap-4 text-sm md:text-lg lg:text-lg">
        <Link className="text-white" href="/" target="">
          Homepage
        </Link>
        <Link className="text-white" href="/posts" target="">
          Posts
        </Link>
        <Link className="text-white" href="/about" target="">
          About us
        </Link>
      </div>
    </div>
  );
}

export default Header;
