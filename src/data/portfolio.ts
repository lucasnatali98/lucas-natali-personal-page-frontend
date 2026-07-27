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
    "Construindo produtos web com foco em escala, performance e experiência do usuário.",
  location: "Minas Gerais, Brasil",
  available: "Disponível para projetos · Q2 2026",
  email: "lucasnatali16@gmail.com",
  linkedin: "https://www.linkedin.com/in/lucasnatali98/",
  github: "https://github.com/lucasnatali98",
  instagram: "https://www.instagram.com/lucasnatalidev/"
};

export const stats: Stat[] = [
  { num: "5+", label: "Anos · Engenharia de Software" },
  { num: "30+", label: "Projetos entregues" },
  { num: "1.2k", label: "Commits · 2025" },
  { num: "12", label: "Tecnologias core" },
];

export const skills: Record<SkillGroup, Skill[]> = {
  Frontend: [
    { name: "HTML5/CSS3", years: "5y", level: 0.99 },
    { name: "React", years: "5y", level: 0.95 },
    { name: "TypeScript", years: "4y", level: 0.92 },
    { name: "Next.js", years: "3y", level: 0.88 },
    { name: "Angular", years: "3y", level: 0.77 },
    { name: "Tailwind CSS", years: "3y", level: 0.9 },
    { name: "Vite / Webpack", years: "4y", level: 0.78 },
  ],
  Backend: [
    { name: "Node.js", years: "5y", level: 0.93 },
    { name: "PHP/Laravel", years: "4y", level: 0.9 },
    { name: "Typescript", years: "4y", level: 0.82 },
    { name: "Express.js", years: "5y", level: 0.99 },
    { name: "Prisma ORM", years: "5y", level: 0.99 },
    { name: "Vitest/Jest", years: "3y", level: 0.75 },
    { name: "PostgreSQL", years: "4y", level: 0.85 },
  ],
  DevOps: [
    { name: "Docker", years: "4y", level: 0.86 },
    { name: "AWS", years: "3y", level: 0.78 },
    { name: "CI/CD · CircleCI/Github Actions", years: "4y", level: 0.84 },
    { name: "Terraform", years: "2y", level: 0.65 },
    { name: "Observability (OpenTelemetry/Prometheus/Grafana)", years: "3y", level: 0.7 },
  ],
};

export const experiences = [
  {
    period: "2023 — Presente",
    title: "Engenheiro de Software · Full Stack",
    company: "Codefy",
    location: "Belo Horizonte · Brasil",
    description:
      "Criador e responsável técnico pelos módulos financeiros e fiscais da plataforma, com desenvolvimento ponta-a-ponta — do front-end à infraestrutura. Concebi e implementei os módulos de emissão de NFS-e e NF-e, cobranças, baixa de parcelas, aprovação de tratamentos e assinaturas digitais. O serviço de notas fiscais já transacionou mais de R$ 25 milhões, sustentando receita recorrente via pacotes pré e pós-pagos, enquanto o módulo de assinaturas digitais escala para mais de 200 unidades assinantes. Também atuo na sustentação de sistemas legados e em integrações entre múltiplos sistemas.",
    tags: [
      "TypeScript",
      "Node.js",
      "PHP",
      "Laravel",
      "MySQL",
      "AWS",
      "Express.js",
      "Vitest",
      "Jest",
    ],
    current: true,
  },
  {
    period: "2021 — 2023",
    title: "Líder Técnico · Analista de Desenvolvimento de Software",
    company: "upFlow.me",
    location: "Belo Horizonte · Brasil",
    description:
      "Evoluí de estagiário a líder técnico do time de desenvolvimento de chatbots, conduzindo a entrega de mais de 35 projetos de soluções conversacionais nos canais WhatsApp, Instagram, Messenger e sites próprios. Arquitetei APIs de automação de fluxos conversacionais que reduziram entre 17% e 32% os custos de atendimento dos clientes. Desenvolvi ainda uma plataforma interna de processamento de alto volume de dados de atendimento, entregando relatórios, métricas e integrações que apoiavam a tomada de decisão. Integrei o ecossistema com ferramentas como Pipedrive, Pipefy, RD Station, HubSpot, Bitrix24 e serviços Google e AWS.",
    tags: [
      "Node.js",
      "TypeScript",
      "APIs",
      "AWS",
      "Integrações",
      "Liderança Técnica",
    ],
    current: false,
  },
  {
    period: "2020 — 2021",
    title: "Cientista de Dados",
    company: "TerraLAB",
    location: "Ouro Preto · Brasil",
    description:
      "Desenvolvi um modelo de geocodificação de endereços que converte descrições textuais de locais em coordenadas geográficas precisas de latitude e longitude, integrando provedores como Google Maps, TomTom, Mapbox e HERE. Apliquei técnicas de Inteligência Artificial para aprimorar a precisão do processo, construindo o pipeline de dados e os modelos preditivos com o ecossistema Python.",
    tags: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "Geocodificação",
    ],
    current: false,
  },
  {
    period: "2020 — 2021",
    title: "Desenvolvedor Web",
    company: "Voluta Soluções Digitais",
    location: "Ouro Preto · Brasil",
    description:
      "Desenvolvi páginas web e APIs para clientes institucionais e do comércio local em Ouro Preto/MG e região, incluindo laboratórios de pesquisa do Instituto de Ciências Exatas e Biológicas, oficinas mecânicas e outros negócios. Atuei em todo o ciclo de entrega, do front-end ao back-end, traduzindo necessidades de cada cliente em soluções web funcionais.",
    tags: ["JavaScript", "PHP", "jQuery", "MySQL", "HTML5", "CSS"],
    current: false,
  },
];

export const projects: Project[] = [
  {
    tag: "Plataforma · 2025",
    title: "Commerce Cloud",
    desc: "Plataforma de e-commerce headless com carrinho, gateway de pagamentos e CMS embarcado. Multi-tenant, suporta 5k pedidos/dia.",
    techs: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    label: "01 · plataforma",
    cover: "ecommerce",
  },
  {
    tag: "Produto · 2024",
    title: "Taskforce",
    desc: "Gerenciador de tarefas colaborativo em tempo real com drag-and-drop, presença ao vivo e sincronização offline-first.",
    techs: ["React", "Firebase", "Tailwind", "CRDT"],
    label: "02 · produto",
    cover: "task",
  },
  {
    tag: "Open Source · 2024",
    title: "Type-Forge CLI",
    desc: "CLI para gerar tipos TypeScript a partir de schemas OpenAPI/Prisma com validação Zod integrada. 480+ stars no GitHub.",
    techs: ["TypeScript", "Node.js", "Commander"],
    label: "03 · open-source",
    cover: "cli",
  },
  {
    tag: "Design System · 2023",
    title: "Atlas UI",
    desc: "Sistema de design interno com 60+ componentes acessíveis, documentação em Storybook e tokens cross-platform (web/iOS/Android).",
    techs: ["React", "Storybook", "Style Dictionary"],
    label: "04 · design-system",
    cover: "design",
  },
];

export const posts: Post[] = [];

export const navItems: NavItem[] = [
  { num: "01", label: "Início", id: "home" },
  { num: "02", label: "Sobre", id: "sobre" },
  { num: "03", label: "Trabalho", id: "trabalho" },
  { num: "04", label: "Projetos", id: "projetos" },
  { num: "05", label: "Blog", id: "blog" },
  { num: "06", label: "Contato", id: "contato" },
];
