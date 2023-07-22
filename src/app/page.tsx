import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5">
      <Link href={"/formPost"} className="text-4xl font-bold">
        Sample form Post
      </Link>
      <br />
      <Link href={"/formPostWithStatus"} className="text-4xl font-bold">
        Sample form Post With Status
      </Link>
    </main>
  );
}
