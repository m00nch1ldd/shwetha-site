import Link from "next/link";

const quickLinks = [
  { href: "/blog", label: "Dual Blog" },
  { href: "/portfolio", label: "Personal Portfolio" },
  { href: "/knowledge", label: "MechE" },
];

export default function Home() {
  return (
    <main className="bg-[#f4f5f8] pb-12">
      <section className="relative isolate overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#a5b9df_0%,#778fbf_35%,#4d6489_70%,#334769_100%)]" />
        <div className="mx-auto flex min-h-[460px] max-w-7xl flex-col justify-between px-6 py-8 text-white">
          <header className="flex items-center justify-between text-lg">
            <p className="font-medium tracking-wide text-white/90">tottalchaaos</p>
            <nav className="flex gap-6 text-base text-white/85">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </header>

          <div className="ml-auto max-w-2xl py-12">
            <h1 className="text-5xl font-medium leading-tight md:text-7xl">Total Chaos</h1>
            <p className="mt-4 text-2xl text-white/90">A lil bit of everything I do :&#39;))</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-8 rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:grid-cols-[220px_1fr_260px]">
        <div className="flex items-center justify-center">
          <div className="relative h-44 w-44">
            <div className="absolute left-10 top-0 h-24 w-24 rounded-full bg-purple-300/55 ring-1 ring-black/20" />
            <div className="absolute left-0 top-12 h-24 w-24 rounded-full bg-rose-300/55 ring-1 ring-black/20" />
            <div className="absolute left-20 top-12 h-24 w-24 rounded-full bg-emerald-300/55 ring-1 ring-black/20" />
            <div className="absolute left-10 top-24 h-24 w-24 rounded-full bg-cyan-300/55 ring-1 ring-black/20" />
          </div>
        </div>

        <div className="space-y-5 text-center text-3xl leading-relaxed text-slate-800 md:text-left">
          <p className="italic">“Art, Science, Religion are but three different ways of expressing a single truth.” — Swami Vivekananda</p>
          <p className="italic">“Chaos can liberate us from old mindsets and patterns of behavior that hold us back.” — Eithos</p>
        </div>

        <aside className="flex flex-col justify-center gap-3 text-base text-black/75">
          <p className="text-lg font-medium">Connect</p>
          <a href="https://instagram.com" className="underline underline-offset-4">Instagram</a>
          <a href="https://github.com" className="underline underline-offset-4">GitHub</a>
          <p>I create content and write poetry.</p>
        </aside>
      </section>
    </main>
  );
}
