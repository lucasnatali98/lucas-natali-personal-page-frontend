const Sobre = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Sobre Mim</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Olá! Sou um desenvolvedor Full Stack apaixonado por criar soluções tecnológicas
              inovadoras e impactantes. Com experiência em diversas tecnologias e frameworks,
              busco constantemente aprender e me aperfeiçoar.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <SkillCard title="Frontend" skills={['React', 'TypeScript', 'Tailwind CSS', 'Next.js']} />
              <SkillCard title="Backend" skills={['Node.js', 'Python', 'Java', 'SQL']} />
              <SkillCard title="DevOps" skills={['Docker', 'AWS', 'CI/CD', 'Git']} />
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Experiência</h2>
            <div className="space-y-6">
              <ExperienceCard
                title="Desenvolvedor Full Stack"
                company="Empresa XYZ"
                period="2020 - Presente"
                description="Desenvolvimento de aplicações web utilizando React, Node.js e AWS."
              />
              <ExperienceCard
                title="Desenvolvedor Frontend"
                company="Empresa ABC"
                period="2018 - 2020"
                description="Criação de interfaces responsivas e otimizadas para SEO."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-gray-600 dark:text-gray-300">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceCard = ({
  title,
  company,
  period,
  description,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
}) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="text-blue-600 dark:text-blue-400">{company}</p>
    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{period}</p>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export default Sobre; 