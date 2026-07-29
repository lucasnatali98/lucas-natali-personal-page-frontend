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
    tag: "Módulo Fiscal · Codefy · 2023–2025",
    title: "Motor de Notas Fiscais (NFS-e/NF-e)",
    desc: "Criei do zero o módulo de emissão e gestão de notas fiscais de serviço e produto da Codefy. Mais de 200 empresas emitem notas diariamente pela plataforma, com volume que já ultrapassou R$ 25 milhões transacionados e sustenta receita recorrente via pacotes pré e pós-pagos.",
    techs: ["TypeScript", "Node.js", "PHP", "Laravel", "MySQL", "AWS"],
    label: "01 · fiscal",
    cover: "ecommerce",
  },
  {
    tag: "Módulo Legal · Codefy · 2024–2025",
    title: "Plataforma de Assinaturas Digitais",
    desc: "Idealizei e construí, ponta a ponta, o fluxo completo de assinatura digital: geração de PDF, armazenamento, envio, reprocessamento e download. Em produção para mais de 100 empresas, gera receita mensal recorrente e substitui papel por segurança e praticidade.",
    techs: ["TypeScript", "Node.js", "PHP", "Laravel", "AWS S3"],
    label: "02 · assinaturas",
    cover: "task",
  },
  {
    tag: "Automação Conversacional · upFlow.me · 2021–2023",
    title: "Chatbots em Escala com Blip",
    desc: "Liderei a construção e o gerenciamento de mais de 30 projetos de chatbots — de clínicas odontológicas a multinacionais do setor de gás e alimentos. Atuação ponta a ponta, do entendimento da demanda ao deploy, reduzindo entre 17% e 32% os custos de atendimento dos clientes.",
    techs: ["Blip Builder", "WhatsApp Business API", "Node.js", "TypeScript"],
    label: "03 · conversação",
    cover: "cli",
  },
  {
    tag: "Produto Pessoal · 2024",
    title: "Gerenciador de Metas e Tarefas",
    desc: "Uma plataforma web-first — não mais um app mobile — para quem leva produtividade a sério: gestão de metas, tarefas e projetos, exportação de relatórios e análise de métricas em um único lugar.",
    techs: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    label: "04 · produtividade",
    cover: "task",
  },
  {
    tag: "Sistema de Gestão · Cliente",
    title: "Lavie Odontologia",
    desc: "Sistema web completo para a gestão de uma clínica odontológica: agenda, pacientes, orçamentos, financeiro e marketing integrados em uma única plataforma, dando à equipe visibilidade de ponta a ponta sobre o próprio negócio.",
    techs: ["PHP", "Laravel", "MySQL", "JavaScript"],
    label: "05 · gestão-clínica",
    cover: "task",
  },
  {
    tag: "Integração de Dados · Allp Fit",
    title: "API de Extração de Dados",
    desc: "Desenvolvi uma API para extração, consolidação e disponibilização de dados operacionais de mais de 20 unidades da rede de academias Allp Fit, centralizando informações que antes viviam espalhadas entre unidades.",
    techs: ["Node.js", "TypeScript", "MySQL"],
    label: "06 · integração",
    cover: "cli",
  },
  {
    tag: "Ciência de Dados · TerraLAB · 2020–2021",
    title: "Machine Learning na Geocodificação de Endereços",
    desc: "Minha principal passagem pela ciência de dados: desenvolvi, em equipe, um modelo que aprimora a geocodificação de endereços combinando Google Maps, Mapbox, TomTom e HERE. Consolidamos uma grande base de dados, treinamos um modelo preditivo e criamos dashboards para acompanhar resultados.",
    techs: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    label: "07 · dados",
    cover: "ecommerce",
  },
  {
    tag: "Open Source · TCC · DECOM/UFOP",
    title: "RecSysExp — Framework de Sistemas de Recomendação",
    desc: "Framework ponta a ponta para sistemas de recomendação: processamento de dados e meta-features, treinamento de modelos, filtragem híbrida, classificação, métricas e visualização. Nasceu como meu TCC e virou ferramenta oficial da disciplina de Sistemas de Recomendação no DECOM/UFOP.",
    techs: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    label: "08 · open-source",
    cover: "cli",
  },
  {
    tag: "Freelance · Voluta / UFOP · 2020–2021",
    title: "Projetos Web Avulsos",
    desc: "Ao longo da graduação na Universidade Federal de Ouro Preto, desenvolvi sites e sistemas sob medida para o laboratório de química do ICEB/UFOP, a Autopeças Neves e outros pequenos negócios — cada um com necessidades e públicos completamente diferentes.",
    techs: ["JavaScript", "PHP", "jQuery", "MySQL", "HTML5", "CSS"],
    label: "09 · freelance",
    cover: "design",
  },
];

export const posts: Post[] = [];

export const navItems: NavItem[] = [
  { num: "01", label: "Início", id: "home" },
  { num: "02", label: "Sobre", id: "sobre" },
  { num: "03", label: "Trabalho", id: "trabalho" },
  { num: "04", label: "Projetos", id: "projetos" },
  // { num: "05", label: "Blog", id: "blog" }, // desativado: seção de posts sem integração com backend
  { num: "06", label: "Contato", id: "contato" },
];
