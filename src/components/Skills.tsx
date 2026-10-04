const groups = [
  {
    title: "Frontend",
    items: ["React.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Next.js"]
  },
  {
    title: "State & Data",
    items: ["Redux", "Redux Toolkit", "React Query", "Zustand", "React Hook Form", "GraphQL"]
  },
  {
    title: "UI & CMS",
    items: ["Tailwind CSS", "Material UI", "Styled Components", "Adobe Experience Manager", "EDS"]
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Axios", "WebSocket", "JWT"]
  },
  {
    title: "Quality & Workflow",
    items: ["Jest", "Vitest", "React Testing Library", "Git", "GitHub", "Agile", "Scrum"]
  }
];

export default function Skills() {
  return (
    <section id="stack" className="section stack-section">
      <div className="container">
        <div className="section-heading">
          <span>04 / TOOLKIT</span>
          <h2>A stack built<br /><i>to ship.</i></h2>
        </div>

        <div className="skills-grid">
          {groups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-number">0{index + 1}</div>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}