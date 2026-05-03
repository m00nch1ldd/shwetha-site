export type StoryCategory = "engineering" | "tottal-chaaos";

export type StoryPost = {
  slug: string;
  category: StoryCategory;
  title: string;
  summary: string;
  date: string;
  tags: string[];
};

// Add new posts by duplicating one object below.
export const posts: StoryPost[] = [
  {
    slug: "designing-crud-systems",
    category: "engineering",
    title: "Designing CRUD systems that scale from toy projects to production",
    summary:
      "Notes from building my full-stack site with Vercel + Neon, and what I would improve for reliability and UX.",
    date: "2026-05-01",
    tags: ["nextjs", "neondb", "architecture"],
  },
  {
    slug: "between-margazhi-and-monsoon",
    category: "tottal-chaaos",
    title: "Between Margazhi and Monsoon",
    summary:
      "A short reflective piece on Carnatic mornings, city rain, and the language of movement.",
    date: "2026-05-02",
    tags: ["poetry", "carnatic", "culture"],
  },
];

export const personalProfile = {
  name: "Shwetha",
  headline: "Mechanical Engineering undergraduate at IIT Madras",
  description:
    "I build software and stories: engineering tutorials on one side, and art, poetry, language, music, travel, and culture on the other.",
  instagram: "https://www.instagram.com/tottal_chaaos/",
  portfolioSite: "https://sites.google.com/view/tottalchaaos",
};
