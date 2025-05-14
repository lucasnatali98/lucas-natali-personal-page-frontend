import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="header">
      <nav className="fixed top-0 w-full z-50 ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-1">
              <Link
                to="/"
                className="text-xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                Lucas Natali
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="md:flex flex-1 justify-end">
              <div className="flex items-center space-x-8">
                <NavLink to="/sobre">Sobre</NavLink>
                <NavLink to="/projetos">Projetos</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contato">Contato</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="hover-navbar relative text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-white"
    style={
      {
        "--hover-navbar-gradient":
          "linear-gradient(to right, #3b82f6, #9333ea)",
      } as React.CSSProperties
    }
  >
    {children}
  </Link>
);

export default Navbar;
