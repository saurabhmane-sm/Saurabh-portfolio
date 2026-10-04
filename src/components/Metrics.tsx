import { useEffect, useState } from "react";

const metrics = [
  { value: 5, suffix: "+", label: "Years building", decimals: 0 },
  { value: 90, suffix: "+", label: "Lighthouse score", decimals: 0 },
  { value: 20, suffix: "%", label: "Load-time improvement", decimals: 0 },
  { value: 4, suffix: "", label: "Major client projects", decimals: 0 },
];

export default function Metrics() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setStarted(true), 350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="metrics">
      <div className="container metrics-grid">
        {metrics.map((metric, index) => (
          <div className="metric" key={metric.label}>
            <span className="metric-index">0{index + 1}</span>
            <strong>
              {started ? metric.value : 0}{metric.suffix}
            </strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}