import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Available for the right opportunity
          </div>

          <p className="hero-kicker">
            Full Stack Engineer · React · TypeScript · AEM · Node.js
          </p>

          <h1>
            I build
            <span className="outline-text"> digital</span>
            <br />
            experiences that
            <span className="accent-text"> perform.</span>
          </h1>

          <p className="hero-description">
            Full Stack Engineer from Mumbai focused on building fast, scalable
            and thoughtful web products — from pixel-perfect interfaces to
            API-driven applications.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore my work <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#contact">
              Start a conversation <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="hero-meta">
            <span><MapPin size={15} /> Mumbai, India</span>
            <span><Sparkles size={15} /> 5+ years of experience</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="floating-tech tech-react">React</div>
          <div className="floating-tech tech-aem">AEM</div>
          <div className="floating-tech tech-node">Node.js</div>
          <div className="floating-tech tech-ts">TypeScript</div>

          <div className="code-card">
            <div className="window-dots"><i /><i /><i /></div>
            <div className="code-line muted">01</div>
            <div className="code-line"><b>const</b> engineer = {"{"}</div>
            <div className="code-line indent">name: <em>"Saurabh"</em>,</div>
            <div className="code-line indent">role: <em>"Full Stack"</em>,</div>
            <div className="code-line indent">stack: [<em>"React"</em>, <em>"Node"</em>],</div>
            <div className="code-line indent">mindset: <em>"ship better"</em></div>
            <div className="code-line">{"}"}</div>
          </div>

          <div className="hero-stamp">
            <span>BUILD</span>
            <strong>BETTER</strong>
            <span>SHIP FAST</span>
          </div>
        </div>
      </div>
    </section>
  );
}