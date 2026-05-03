import { posts } from "@/lib/content";

const boxStyle: Record<"engineering" | "tottal-chaaos", string> = {
  engineering: "from-blue-50 to-cyan-50 border-blue-200",
  "tottal-chaaos": "from-rose-50 to-orange-50 border-rose-200",
};

export default function BlogPage() {
  const engineering = posts.filter((post) => post.category === "engineering");
  const chaos = posts.filter((post) => post.category === "tottal-chaaos");

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="mt-2 text-black/70">
        Two rooms, one universe: engineering tutorials and Tottal Chaaos writing.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className={`rounded-2xl border bg-gradient-to-br p-6 ${boxStyle.engineering}`}>
          <h2 className="text-xl font-semibold">Engineering</h2>
          <p className="mt-1 text-sm text-black/70">Technical tutorials, build logs, and product notes.</p>
          <div className="mt-5 space-y-4">
            {engineering.map((post) => (
              <article key={post.slug} className="rounded-xl border border-black/10 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-black/50">{post.date}</p>
                <h3 className="mt-1 font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-black/70">{post.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`rounded-2xl border bg-gradient-to-br p-6 ${boxStyle["tottal-chaaos"]}`}>
          <h2 className="text-xl font-semibold">Tottal Chaaos</h2>
          <p className="mt-1 text-sm text-black/70">
            Poetry, Carnatic music, travel, language, and culture.
          </p>
          <div className="mt-5 space-y-4">
            {chaos.map((post) => (
              <article key={post.slug} className="rounded-xl border border-black/10 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-black/50">{post.date}</p>
                <h3 className="mt-1 font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-black/70">{post.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8 rounded-2xl border border-dashed border-black/30 bg-black/[0.02] p-5 text-sm">
        <p className="font-medium">Easy post workflow</p>
        <p className="mt-1 text-black/70">
          To add a new post quickly, duplicate one object in <code>lib/content.ts</code> and set its category to
          <code> engineering</code> or <code>tottal-chaaos</code>.
        </p>
      </section>
    </main>
  );
}
