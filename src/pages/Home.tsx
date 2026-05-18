const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 mx-auto">
      <div className="text-center px-4 py-2">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span
              className="block py-4 typewriter"
              style={{
                background: "linear-gradient(to right, #f6a472, #ff914d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Lucas Natali
            </span>
            <span
              className="block typewriter"
              style={{
                background: "linear-gradient(to right, #f6a472, #ff914d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Desenvolvedor Full Stack
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transformando ideias em código, criando soluções inovadoras e
            impactantes.
          </p>
        </div>
      </div>
      <div className="container flex justify-center items-center mt-16">
        <div className="coffee-header">
          <div className="coffee-header__buttons coffee-header__button-one"></div>
          <div className="coffee-header__buttons coffee-header__button-two"></div>
          <div className="coffee-header__display"></div>
          <div className="coffee-header__details"></div>
        </div>
        <div className="coffee-medium">
          <div className="coffe-medium__exit"></div>
          <div className="coffee-medium__arm"></div>
          <div className="coffee-medium__liquid"></div>
          <div className="coffee-medium__smoke coffee-medium__smoke-one"></div>
          <div className="coffee-medium__smoke coffee-medium__smoke-two"></div>
          <div className="coffee-medium__smoke coffee-medium__smoke-three"></div>
          <div className="coffee-medium__smoke coffee-medium__smoke-for"></div>
          <div className="coffee-medium__cup"></div>
        </div>
        <div className="coffee-footer"></div>
      </div>
    </div>
  );
};

export default Home;
