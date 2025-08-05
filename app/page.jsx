import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[url(/bg2.jpg)] bg-no-repeat bg-center bg-cover bg-fixed">
      <section className="min-h-dvh bg-black/40 flex items-center justify-center">
        <div className="max-w-4xl space-y-10">
          <h1 className="text-white text-center md:text-4xl text-3xl lg:text-6xl font-extrabold">
            Welcome to <span className="italic text-yellow-500">InkPress</span>
          </h1>
          <p className="text-gray-200 text-center text-xl font-semibold">
            A digital hub where we share book reviews. Designed for book lovers
            to discover, review, and share their favourite reads. Whether you
            are a casual reader or a bookworm. InkPress lets you track books you
            have read, are reading and want to read. Write, read, and share
            honst reviews from a pasionate comunity.
          </p>

          <div>
            <Link href={"#"}>Get Started</Link>
            <Link href={"#"}>Our Story</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
