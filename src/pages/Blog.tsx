import { posts } from "../data/portfolio";
import { Icon } from "../components/Icon";

export default function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <span className="section-label">~/blog/posts/</span>
            <h2 className="section-title">
              Notas, ensaios,<br />
              <em>tutoriais.</em>
            </h2>
          </div>
          <a href="#" className="btn btn-ghost" data-hover>
            Todos os posts {Icon.arrowRight}
          </a>
        </div>

        <div className="blog-list reveal">
          {posts.map((p) => (
            <a href="#" key={p.num} className="blog-post" data-hover>
              <span className="blog-num">{p.num} · post</span>
              <div className="blog-title-wrap">
                <h3 className="blog-title">{p.title}</h3>
                <span className="blog-excerpt">{p.excerpt}</span>
              </div>
              <span className="blog-meta">
                <strong>{p.date}</strong>
                {p.read}
              </span>
              <span className="blog-arrow">{Icon.arrowRight}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
