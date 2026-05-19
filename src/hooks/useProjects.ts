import { useState, useEffect } from "react";
import api from "../lib/api";
import type { Project } from "../data/portfolio";

interface ApiProject {
  id: string;
  name: string;
  description: string;
  tag: string;
  label: string;
  cover: string;
  techs: string[];
  imageUrl?: string | null;
  url?: string | null;
}

function toProject(p: ApiProject, index: number): Project {
  return {
    tag: p.tag,
    title: p.name,
    desc: p.description,
    techs: p.techs,
    label: p.label,
    cover: p.cover as Project["cover"],
  };
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<{ success: boolean; data: ApiProject[] }>("/projects/find-all")
      .then((res) => setProjects(res.data.data.map(toProject)))
      .catch(() => setError("Erro ao carregar projetos"))
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading, error };
}
