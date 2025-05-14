export const Footer = () => {
  return (
    <div className="absolute top-10/12 flex flex-col justify-center items-center w-full px-4 py-12 md:px-60 lg:px-96">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-navbar text-sm"
          style={
            {
              "--hover-navbar-gradient":
                "linear-gradient(to right, #3b82f6, #9333ea)",
            } as React.CSSProperties
          }
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-navbar text-sm"
          style={
            {
              "--hover-navbar-gradient":
                "linear-gradient(to right, #3b82f6, #9333ea)",
            } as React.CSSProperties
          }
        >
          LinkedIn
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-navbar text-sm"
          style={
            {
              "--hover-navbar-gradient":
                "linear-gradient(to right, #3b82f6, #9333ea)",
            } as React.CSSProperties
          }
        >
          YouTube
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-navbar text-sm"
          style={
            {
              "--hover-navbar-gradient":
                "linear-gradient(to right, #3b82f6, #9333ea)",
            } as React.CSSProperties
          }
        >
          Twitter
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-navbar text-sm"
          style={
            {
              "--hover-navbar-gradient":
                "linear-gradient(to right, #3b82f6, #9333ea)",
            } as React.CSSProperties
          }
        >
          Facebook
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-navbar"
          style={
            {
              "--hover-navbar-gradient":
                "linear-gradient(to right, #3b82f6, #9333ea)",
            } as React.CSSProperties
          }
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
