import { useState, useEffect } from "react";
import api from "../lib/api";
import type { Experience } from "../data/portfolio";

interface ApiExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  tags: string[];
}

function formatPeriod(startDate: string, endDate: string | null): string {
  const start = new Date(startDate).getFullYear();
  const end = endDate ? new Date(endDate).getFullYear().toString() : "Presente";
  return `${start} — ${end}`;
}

function toExperience(e: ApiExperience): Experience {
  return {
    period: formatPeriod(e.startDate, e.endDate),
    title: e.position,
    company: e.company,
    location: e.location,
    description: e.description,
    tags: e.tags,
    current: e.endDate === null,
  };
}

export function useExperiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<{ success: boolean; data: ApiExperience[] }>("/job-experiences/find-all")
      .then((res) => setExperiences(res.data.data.map(toExperience)))
      .catch(() => setError("Erro ao carregar experiências"))
      .finally(() => setLoading(false));
  }, []);

  return { experiences, loading, error };
}
