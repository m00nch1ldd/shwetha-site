import Link from "next/link";

const chaosTopics = ["Poetry", "Music", "Travel", "Sanatana Dharma"];

export default function BlogPage() {
  return (
    <main className="grid min-h-[calc(100vh-80px)] md:grid-cols-2">
      <section className="flex flex-col justify-between border-r border-black/10 bg-[#f4f4f4] p-8 md:p-12">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-black/60">Engineering</p>
          <h1 className="mt-3 text-4xl font-semibold">MechE Notebook</h1>
          <p className="mt-4 max-w-xl text-lg text-black/70">
            A tutorial-style page for mechanical engineering concepts, design notes, and worked examples.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-black/10 bg-white p-6">
          <p className="text-sm font-medium text-black/60">Planned link</p>
          <Link href="/knowledge" className="mt-2 inline-block text-2xl font-semibold underline underline-offset-4">
            Open Engineering World →
          </Link>
        </div>
      </section>

      <section className="flex flex-col justify-between bg-white p-8 md:p-12">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-black/60">Tottal Chaaos</p>
          <h2 className="mt-3 text-4xl font-semibold">Creative Universe</h2>
          <p className="mt-4 max-w-xl text-lg text-black/70">
            Split into poetry, music, travel, and Sanatana Dharma with room for visuals and storytelling.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {chaosTopics.map((topic) => (
            <Link
              key={topic}
              href="/creative"
              className="rounded-2xl border border-black/10 bg-amber-50 p-4 text-lg font-medium transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              {topic}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
