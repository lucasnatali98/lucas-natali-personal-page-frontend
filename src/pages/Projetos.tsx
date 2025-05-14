const Projetos = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de e-commerce completa com carrinho de compras, pagamentos e sistema de autenticação.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://sinch.com/wp-content/uploads/2024/08/omnichannel-ecommerce-hero.png",
      link: "https://sinch.com/wp-content/uploads/2024/08/omnichannel-ecommerce-hero.png",
    },
    {
      title: "Task Management App",
      description:
        "Aplicativo de gerenciamento de tarefas com drag-and-drop e colaboração em tempo real.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image:
        "https://www.chanty.com/blog/wp-content/uploads/2020/10/Task-manager-apps-740x380.jpg",
      link: "https://www.chanty.com/blog/wp-content/uploads/2020/10/Task-manager-apps-740x380.jpg",
    },
    {
      title: "Portfolio Website",
      description:
        "Website pessoal responsivo com blog integrado e sistema de contato.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://pedrowebdesign.com.br/assets/uploads/service-5.jpg",
      link: "https://pedrowebdesign.com.br/assets/uploads/service-5.jpg",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1
          className="hover-underline text-3xl font-bold text-gray-900 dark:text-white mb-8"
          style={
            {
              "--hover-underline-gradient":
                "linear-gradient(to right, #3b82f6, #9333ea)",
            } as React.CSSProperties
          }
        >
          Projetos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  link,
}: {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}) => (
  <div className="rounded-lg shadow-lg overflow-hidden transform  transition duration-300 hover:scale-105 border border-amber-50 border-r-2 border:opacity-90">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Ver Projeto
      </a>
    </div>
  </div>
);

export default Projetos;
