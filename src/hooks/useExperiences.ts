import { experiences } from "../data/portfolio";
import type { Experience } from "../data/portfolio";

export function useExperiences(): { experiences: Experience[]; loading: boolean; error: string | null } {
  return { experiences, loading: false, error: null };
}
