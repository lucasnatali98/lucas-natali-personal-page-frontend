import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log("Form data:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
                Contato
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Entre em Contato
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Estou sempre aberto a novas oportunidades e parcerias. Sinta-se
                à vontade para entrar em contato comigo através do formulário ou
                diretamente pelos canais abaixo.
              </p>

              <div className="space-y-4">
                <ContactInfo
                  icon={
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  }
                  title="Email"
                  content="lucasnatali16@gmail.com"
                />
                <ContactInfo
                  icon={
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  }
                  title="Localização"
                  content="Minas Gerais, Brasil"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6  ">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-white dark:text-white"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-1 block w-full border-b border-white focus:border-blue-950 focus:ring-blue-950 dark:bg-black dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-white dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-1 block w-full border-b border-white focus:border-blue-500 focus:ring-blue-500 dark:bg-black dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold text-white dark:text-white"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Qual o motivo do contato?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 p-1 block w-full border-b border-white focus:border-blue-500 focus:ring-blue-500 dark:bg-black dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-white dark:text-white"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Me conte como posso te ajudar"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 p-1 block w-full border-b border-white focus:border-blue-500 focus:ring-blue-500 dark:bg-black dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0 text-blue-600 dark:text-blue-400">{icon}</div>
    <div>
      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  </div>
);

export default Contato;
