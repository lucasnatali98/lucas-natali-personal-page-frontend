const Home = () => {
  return (
    <div className="grid pt-16 shadow-lg ">
      <div className="sm:px-6 lg:px-96 xs:px-96 py-16 ">
        <div className="text-center flex items-center justify-between h-16">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Lucas Natali</span>
              <span className="block text-blue-600 dark:text-blue-400">
                Desenvolvedor Full Stack
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transformando ideias em código, criando soluções inovadoras e
              impactantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
