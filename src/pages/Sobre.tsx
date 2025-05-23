const Sobre = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1
              className="hover-underline font-bold "
              style={
                {
                  "--hover-underline-gradient":
                    "linear-gradient(to right, #3b82f6, #9333ea)",
                } as React.CSSProperties
              }
            >
              <span
                style={{
                  background: "linear-gradient(to right, #f6a472, #ff914d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sobre
              </span>
            </h1>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <section className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={"https://f4.bcbits.com/img/a2899565242_10.jpg"}
                alt={"mamaco"}
                className="w-full md:w-1/2 h-48 object-cover"
              />
              <p className="text-lg text-gray-600 dark:text-gray-100">
                Olá! Sou um desenvolvedor Full Stack apaixonado por criar
                soluções tecnológicas inovadoras e impactantes. Com experiência
                em diversas tecnologias e frameworks, busco constantemente
                aprender e me aperfeiçoar.
              </p>
            </section>

            <div className="mb-8 pt-14">
              <h1
                className="hover-underline font-bold "
                style={
                  {
                    "--hover-underline-gradient":
                      "linear-gradient(to right, #3b82f6, #9333ea)",
                  } as React.CSSProperties
                }
              >
                <span
                  style={{
                    background: "linear-gradient(to right, #f6a472, #ff914d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Habilidades
                </span>
              </h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <SkillCard
                title="Frontend"
                skills={["React", "TypeScript", "Tailwind CSS", "Next.js"]}
              />
              <SkillCard
                title="Backend"
                skills={["Node.js", "Python", "Java", "SQL"]}
              />
              <SkillCard
                title="DevOps"
                skills={["Docker", "AWS", "CI/CD", "Git"]}
              />
            </div>

            <div className="mb-8 pt-14">
              <h1
                className="hover-underline font-bold "
                style={
                  {
                    "--hover-underline-gradient":
                      "linear-gradient(to right, #3b82f6, #9333ea)",
                  } as React.CSSProperties
                }
              >
                <span
                  style={{
                    background: "linear-gradient(to right, #f6a472, #ff914d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Experiências
                </span>
              </h1>
            </div>
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
  <div className="p-4 rounded-lg shadow transition-transform transform hover:scale-100 hover:shadow-lg hover:bg-gray-800 hover:bg-opacity-80">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-amber-500 mb-3">
      <span
        style={{
          background: "linear-gradient(to right, #f6a472, #ff914d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </span>
    </h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="dark:text-white typewriter">
          <h6>{skill}</h6>
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
  <div className="p-6 rounded-lg shadow">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
      <span
        style={{
          background: "linear-gradient(to right, #f6a472, #ff914d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </span>
    </h3>
    <p className="text-white dark:text-gray-200">{company}</p>
    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{period}</p>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export default Sobre;
