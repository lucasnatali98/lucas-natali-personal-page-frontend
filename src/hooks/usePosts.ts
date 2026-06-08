import { posts } from "../data/portfolio";
import type { Post } from "../data/portfolio";

export function usePosts(): { posts: Post[]; loading: boolean; error: string | null } {
  return { posts, loading: false, error: null };
}
