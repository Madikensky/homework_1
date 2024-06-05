import Image from 'next/image';

export default function Body() {
  return (
    <div className="flex flex-col m-45 items-center gap-10  p-10 flex-grow justify-center">
      <Image src="/logo.png" alt="" width={150} height={250} className="" />
      <h1 className="w-full text-center">
        <strong>
          This is the simple Web Blog Application written in Next.js!
        </strong>
      </h1>
    </div>
  );
}
