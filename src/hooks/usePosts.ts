import { useState, useEffect } from "react";
import api from "../lib/api";
import type { Post } from "../data/portfolio";

interface ApiPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  readTime?: string | null;
  published: boolean;
  createdAt: string;
}

const PT_MONTHS = [
  "jan", "fev", "mar", "abr", "mai", "jun",
  "jul", "ago", "set", "out", "nov", "dez",
];

function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${PT_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function toPost(p: ApiPost, index: number): Post {
  return {
    num: String(index + 1).padStart(2, "0"),
    title: p.title,
    excerpt: p.excerpt ?? "",
    read: p.readTime ?? "— min · leitura",
    date: formatDate(p.createdAt),
  };
}

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<{ success: boolean; data: ApiPost[] }>("/posts/find-all")
      .then((res) => {
        const published = res.data.data.filter((p) => p.published);
        setPosts(published.map(toPost));
      })
      .catch(() => setError("Erro ao carregar posts"))
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
}
