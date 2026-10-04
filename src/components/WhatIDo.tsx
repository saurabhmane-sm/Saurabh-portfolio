import {
  Code2,
  Database,
  Layers3,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    no: "01",
    title: "Frontend Engineering",
    text: "React, TypeScript and modern UI architecture focused on reusable, responsive and maintainable interfaces.",
    icon: MonitorSmartphone,
    tags: "React · TypeScript · Next.js",
  },
  {
    no: "02",
    title: "UI Engineering",
    text: "Pixel-accurate implementation, responsive layouts, CSS systems and performance-focused frontend experiences.",
    icon: Code2,
    tags: "CSS · Tailwind · Responsive UI",
  },
  {
    no: "03",
    title: "AEM & Forms",
    text: "Component-driven AEM experiences, EDS websites and form-focused UI development for production digital platforms.",
    icon: Layers3,
    tags: "AEM · EDS · AEM Forms",
  },
  {
    no: "04",
    title: "Full Stack",
    text: "Backend fundamentals and API integration using Node.js, Express, MongoDB and REST-based services.",
    icon: Database,
    tags: "Node · Express · MongoDB · REST",
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="section what-section">
      <div className="container">
        <div className="section-heading">
          <span>03 / WHAT I DO</span>

          <h2>
            From interface
            <br />
            <i>to infrastructure.</i>
          </h2>
        </div>

        <div className="what-grid">
          {services.map(
            ({ no, title, text, icon: Icon, tags }) => (
              <article className="what-card" key={title}>
                <div className="what-top">
                  <span>{no}</span>
                  <Icon size={24} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <span className="what-tags">{tags}</span>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
