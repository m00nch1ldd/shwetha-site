"use client";

import { useEffect, useState } from "react";

type Post = {
  id: string;
  title: string;
  content: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const handleSubmit = async () => {
    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");

    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Blog</h1>

      {/* Create Post */}
      <div className="space-y-2">
        <input
          className="border p-2 w-full"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button
          className="bg-black text-white px-4 py-2"
          onClick={handleSubmit}
        >
          Add Post
        </button>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="border p-4">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}