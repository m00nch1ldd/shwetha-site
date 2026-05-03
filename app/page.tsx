import Link from "next/link";
import { personalProfile } from "@/lib/content";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <section className="rounded-3xl border border-black/10 bg-gradient-to-br from-orange-50 to-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-black/60">welcome</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
          Building systems. Writing worlds.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-black/70">
          {personalProfile.headline}. {personalProfile.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-full bg-black px-5 py-2 text-sm text-white" href="/blog">
            Explore Blog
          </Link>
          <Link className="rounded-full border border-black/20 px-5 py-2 text-sm" href="/portfolio">
            View Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
