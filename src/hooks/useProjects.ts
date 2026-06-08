import { projects } from "../data/portfolio";
import type { Project } from "../data/portfolio";

export function useProjects(): { projects: Project[]; loading: boolean; error: string | null } {
  return { projects, loading: false, error: null };
}
