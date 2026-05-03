import { personalProfile } from "@/lib/content";

export default function Portfolio() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold">Portfolio</h1>
      <p className="mt-3 text-black/70">
        Keeping your current portfolio exactly as-is for now. We can customize this later section by section.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
        <iframe
          title="Shwetha Portfolio"
          src={personalProfile.portfolioSite}
          className="h-[70vh] w-full"
        />
      </div>
    </main>
  );
}
