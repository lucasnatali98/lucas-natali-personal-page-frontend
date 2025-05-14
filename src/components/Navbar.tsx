import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="header">
      <nav className="fixed top-0 w-full z-50 ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-1">
              <Link to="/">
                <p
                  className="font-bold"
                  style={{
                    background: "linear-gradient(to right, #f6a472, #ff914d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  LN
                </p>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="md:flex flex-1 justify-end">
              <div className="flex items-center space-x-8">
                <NavLink to="/sobre">
                  <div>
                    <p
                      className="font-bold"
                      style={{
                        background:
                          "linear-gradient(to right, #f6a472, #ff914d)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Sobre
                    </p>
                  </div>
                </NavLink>
                <NavLink to="/projetos">
                  <p
                    className="font-bold"
                    style={{
                      background: "linear-gradient(to right, #f6a472, #ff914d)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Projetos
                  </p>
                </NavLink>
                <NavLink to="/blog">
                  <p
                    className="font-bold"
                    style={{
                      background: "linear-gradient(to right, #f6a472, #ff914d)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Blog
                  </p>
                </NavLink>
                <NavLink to="/contato">
                  <p
                    className="font-bold"
                    style={{
                      background: "linear-gradient(to right, #f6a472, #ff914d)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Contato
                  </p>
                </NavLink>
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
