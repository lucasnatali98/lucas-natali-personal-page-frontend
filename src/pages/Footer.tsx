export const Footer = () => {
  return (
    <footer className="w-full px-4 py-12 flex justify-center items-center">
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl w-full">
        {[
          { name: "Instagram", url: "https://www.instagram.com" },
          { name: "LinkedIn", url: "https://www.linkedin.com" },
          { name: "YouTube", url: "https://www.youtube.com" },
          { name: "Twitter", url: "https://www.twitter.com" },
          { name: "Facebook", url: "https://www.facebook.com" },
          { name: "GitHub", url: "https://www.github.com" },
        ].map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-navbar text-sm min-w-[100px] text-center"
            style={
              {
                "--hover-navbar-gradient":
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
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </footer>
  );
};
