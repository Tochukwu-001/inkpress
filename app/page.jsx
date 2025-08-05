import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[url(/bg2.jpg)] bg-no-repeat bg-center bg-cover bg-fixed">
      <section className="min-h-dvh bg-black/40">
        <div>
          <h1>
            Welcome to <span>InkPress</span>
          </h1>
          <p>
            A digital hub where we share book reviews. Designed for book lovers
            to discover, review, and share their favourite reads. Whether you
            are a casual reader or a bookworm. InkPress lets you track books you
            have read, are reading and want to read. Write, read, and share
            honst reviews from a pasionate comunity.
          </p>
        </div>
      </section>
    </main>
  );
}
