import { ArrowUpRight } from "lucide-react";

const experience = [
  {
    year: "NOV 2024 — PRESENT",
    role: "Technical Analyst — UI",
    company: "EnFuse Solutions",
    points: [
      "Working as an AEM Site Developer for Maruti Suzuki Nexa and Arena websites, building reusable components and optimising performance.",
      "Developing responsive, mobile-first experiences using HTML5, CSS3, vanilla JavaScript and React.",
      "Achieved 90+ Lighthouse scores for Performance, Accessibility and Best Practices.",
      "Applying SEO and AEM/EDS best practices across production websites.",
    ],
  },
  {
    year: "AUG 2021 — NOV 2024",
    role: "Software Engineer",
    company: "Tapbotic AI Pvt Ltd",
    points: [
      "Built responsive and reusable frontend interfaces using React, JavaScript, CSS3 and Tailwind CSS.",
      "Worked on UI development and responsive experiences with a strong focus on usability and mobile UX.",
      "Optimised frontend performance and improved application load times through practical performance techniques.",
      "Collaborated with cross-functional teams to deliver production-ready web experiences.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-heading">
          <span>01 / EXPERIENCE</span>

          <h2>
            Where I’ve been
            <br />
            <i>& what I’ve shipped.</i>
          </h2>
        </div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <article
              className="experience-row"
              key={item.company}
            >
              <div className="exp-number">0{index + 1}</div>

              <div className="exp-date">{item.year}</div>

              <div className="exp-content">
                <h3>{item.role}</h3>

                <p className="company">{item.company}</p>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <ArrowUpRight
                className="exp-arrow"
                size={25}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
