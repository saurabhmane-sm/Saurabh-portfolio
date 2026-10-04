import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-label">
          <span>05 / ABOUT</span>
          <div className="vertical-word">CURIOUS · PRECISE · PRACTICAL</div>
        </div>
        <div>
          <h2>I care about the space between <i>design and engineering.</i></h2>
          <p>
            My work sits at the intersection of frontend engineering, performance
            and user experience. I like turning design systems into clean,
            reusable components and making complex interfaces feel simple.
          </p>
          <p>
            My experience spans React applications, AEM/EDS websites, REST API
            integrations and backend fundamentals with Node.js, Express and MongoDB.
          </p>
          <a className="text-link" href="#contact">Work with me <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}