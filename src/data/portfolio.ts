/* =========================================================
   Dados de portfolio — tipados
   ========================================================= */

export type Skill = { name: string; years: string; level: number };
export type SkillGroup = "Frontend" | "Backend" | "DevOps";

export type Experience = {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
  current?: boolean;
};

export type Project = {
  tag: string;
  title: string;
  desc: string;
  techs: string[];
  label: string;
  cover: "ecommerce" | "task" | "cli" | "design";
};

export type Post = {
  num: string;
  title: string;
  excerpt: string;
  read: string;
  date: string;
};

export type NavItem = { num: string; label: string; id: string };
export type Stat = { num: string; label: string };

export const profile = {
  name: "Lucas Natali",
  role: "Engenheiro de Software",
  roleAlt: "Full-Stack Developer",
  tagline:
    "Construindo produtos web com foco em escala, performance e detalhe.",
  location: "Minas Gerais, Brasil",
  available: "Disponível para projetos · Q2 2026",
  email: "lucasnatali16@gmail.com",
  linkedin: "https://www.linkedin.com/in/lucasnatali98/",
  github: "https://github.com/lucasnatali98",
};

export const stats: Stat[] = [
  { num: "6+", label: "Anos · Engenharia" },
  { num: "40+", label: "Projetos entregues" },
  { num: "1.2k", label: "Commits · 2025" },
  { num: "12", label: "Tecnologias core" },
];

export const skills: Record<SkillGroup, Skill[]> = {
  Frontend: [
    { name: "React", years: "5y", level: 0.95 },
    { name: "TypeScript", years: "4y", level: 0.92 },
    { name: "Next.js", years: "3y", level: 0.88 },
    { name: "Tailwind CSS", years: "3y", level: 0.9 },
    { name: "Vite / Webpack", years: "4y", level: 0.78 },
  ],
  Backend: [
    { name: "Node.js", years: "5y", level: 0.93 },
    { name: "Python", years: "4y", level: 0.82 },
    { name: "Java", years: "3y", level: 0.75 },
    { name: "PostgreSQL", years: "4y", level: 0.85 },
    { name: "REST · GraphQL", years: "4y", level: 0.88 },
  ],
  DevOps: [
    { name: "Docker", years: "4y", level: 0.86 },
    { name: "AWS", years: "3y", level: 0.78 },
    { name: "CI/CD · GitHub Actions", years: "4y", level: 0.84 },
    { name: "Terraform", years: "2y", level: 0.65 },
    { name: "Observability", years: "3y", level: 0.7 },
  ],
};

export const experiences: Experience[] = [
  {
    period: "2023 — Presente",
    title: "Engenheiro de Software Pleno",
    company: "Empresa XYZ",
    location: "Remoto · Brasil",
    description:
      "Liderança técnica do squad de plataforma. Migração de monolito para microsserviços, redução de 60% em tempo de build, e implementação de design system reutilizado por 8 produtos internos.",
    tags: ["React", "Node.js", "AWS", "Kubernetes", "Design Systems"],
    current: true,
  },
  {
    period: "2021 — 2023",
    title: "Desenvolvedor Full Stack",
    company: "Empresa ABC",
    location: "Híbrido · BH",
    description:
      "Construção de aplicações SaaS B2B do zero. Stack TypeScript de ponta a ponta, foco em DX (developer experience) e onboarding de novos engenheiros.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Stripe"],
  },
  {
    period: "2019 — 2021",
    title: "Desenvolvedor Frontend",
    company: "Empresa Beta",
    location: "Presencial · BH",
    description:
      "Desenvolvimento de interfaces responsivas, otimização para SEO e performance. Primeiros contatos com arquitetura de componentes e testes automatizados.",
    tags: ["React", "SCSS", "Jest", "Webpack"],
  },
];

export const projects: Project[] = [
  {
    tag: "Plataforma · 2025",
    title: "Commerce Cloud",
    desc:
      "Plataforma de e-commerce headless com carrinho, gateway de pagamentos e CMS embarcado. Multi-tenant, suporta 5k pedidos/dia.",
    techs: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    label: "01 · plataforma",
    cover: "ecommerce",
  },
  {
    tag: "Produto · 2024",
    title: "Taskforce",
    desc:
      "Gerenciador de tarefas colaborativo em tempo real com drag-and-drop, presença ao vivo e sincronização offline-first.",
    techs: ["React", "Firebase", "Tailwind", "CRDT"],
    label: "02 · produto",
    cover: "task",
  },
  {
    tag: "Open Source · 2024",
    title: "Type-Forge CLI",
    desc:
      "CLI para gerar tipos TypeScript a partir de schemas OpenAPI/Prisma com validação Zod integrada. 480+ stars no GitHub.",
    techs: ["TypeScript", "Node.js", "Commander"],
    label: "03 · open-source",
    cover: "cli",
  },
  {
    tag: "Design System · 2023",
    title: "Atlas UI",
    desc:
      "Sistema de design interno com 60+ componentes acessíveis, documentação em Storybook e tokens cross-platform (web/iOS/Android).",
    techs: ["React", "Storybook", "Style Dictionary"],
    label: "04 · design-system",
    cover: "design",
  },
];

export const posts: Post[] = [
  {
    num: "01",
    title: "Por que parei de usar useEffect (quase sempre)",
    excerpt: "padrões / react",
    read: "8 min · leitura",
    date: "abr 2026",
  },
  {
    num: "02",
    title: "Construindo CLIs em Node.js que não dão vergonha",
    excerpt: "tooling / node",
    read: "12 min · leitura",
    date: "mar 2026",
  },
  {
    num: "03",
    title: "Arquitetura de monorepos: o guia que eu queria ter lido",
    excerpt: "arquitetura / monorepo",
    read: "15 min · leitura",
    date: "fev 2026",
  },
  {
    num: "04",
    title: "Type-safe end-to-end: do banco até o componente",
    excerpt: "typescript / dx",
    read: "10 min · leitura",
    date: "jan 2026",
  },
];

export const navItems: NavItem[] = [
  { num: "01", label: "Início", id: "home" },
  { num: "02", label: "Sobre", id: "sobre" },
  { num: "03", label: "Trabalho", id: "trabalho" },
  { num: "04", label: "Projetos", id: "projetos" },
  { num: "05", label: "Blog", id: "blog" },
  { num: "06", label: "Contato", id: "contato" },
];
