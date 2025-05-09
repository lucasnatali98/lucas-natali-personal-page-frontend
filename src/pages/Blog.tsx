const Blog = () => {
  const posts = [
    {
      title: 'Introdução ao React Hooks',
      excerpt: 'Aprenda como utilizar os Hooks do React para gerenciar estado e efeitos colaterais em componentes funcionais.',
      date: '2024-03-15',
      readTime: '5 min',
      category: 'React',
    },
    {
      title: 'TypeScript: Por que usar?',
      excerpt: 'Descubra os benefícios de usar TypeScript em seus projetos e como ele pode melhorar a qualidade do seu código.',
      date: '2024-03-10',
      readTime: '7 min',
      category: 'TypeScript',
    },
    {
      title: 'Tailwind CSS: Estilizando com utilidades',
      excerpt: 'Um guia completo sobre como utilizar o Tailwind CSS para criar interfaces modernas e responsivas.',
      date: '2024-03-05',
      readTime: '6 min',
      category: 'CSS',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Blog</h1>
        
        <div className="grid gap-8">
          {posts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogPost = ({
  title,
  excerpt,
  date,
  readTime,
  category,
}: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}) => (
  <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
        {category}
      </span>
      <span className="text-gray-500 dark:text-gray-400 text-sm">
        {new Date(date).toLocaleDateString('pt-BR')}
      </span>
      <span className="text-gray-500 dark:text-gray-400 text-sm">{readTime} de leitura</span>
    </div>
    
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
      {title}
    </h2>
    
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      {excerpt}
    </p>
    
    <a
      href="#"
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
    >
      Ler mais →
    </a>
  </article>
);

export default Blog; 