import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-red-600 flex flex-row justify-center align-middle gap-5 p-10 text-white ">
      <Link className="text-white" href="https://www.nfactorial.school/">
        n!factorial
      </Link>
      <Link href="https://github.com/Madikensky" target="">
        Github
      </Link>
      <div>2024</div>
    </div>
  );
}

export default Footer;
