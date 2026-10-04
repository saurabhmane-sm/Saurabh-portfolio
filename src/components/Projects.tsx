import { useState } from "react";
import { ArrowUpRight, ExternalLink, Activity, ShieldCheck, Zap } from "lucide-react";

const projects = [
  {
    no: "01",
    client: "MARUTI SUZUKI INDIA LTD.",
    title: "Nexa & Arena",
    type: "AEM / EDS / PERFORMANCE",
    description:
      "High-performance automotive experiences built with AEM and Edge Delivery Services, with reusable components, mobile-first UI and SEO optimisation.",
    tags: ["AEM", "EDS", "JavaScript", "SEO"],
    url: "https://www.nexaexperience.com",
    preview: "nexa",
  },
  {
    no: "02",
    client: "HDFC BANK",
    title: "Personal Loans",
    type: "AEM FORMS / UI / CSS",
    description:
      "Worked as a UI Developer on the HDFC Bank Personal Loans experience, focusing on responsive UI implementation, Figma-accurate design and frontend styling using AEM Forms and CSS.",
    tags: ["AEM Forms", "CSS", "UI Development", "Responsive UI"],
    url: "https://applyonline.hdfc.bank.in/personal-loans",
    preview: "hdfc",
  },
  {
    no: "03",
    client: "TELIA · SWEDEN",
    title: "Data-first React experience",
    type: "REACT / API / UX",
    description:
      "React application focused on efficient data fetching, caching and responsive UX. React Query reduced unnecessary API calls and improved loading states.",
    tags: ["React", "React Query", "REST API", "Tailwind"],
    preview: "telia",
  },
  {
    no: "04",
    client: "CHUBB · NEW YORK CITY",
    title: "Interactive insurance UI",
    type: "REACT / ANIMATION",
    description:
      "Responsive React interfaces with interactive UI elements, animation and CSS transitions, improving visual appeal and contributing to faster page experiences.",
    tags: ["React", "JavaScript", "CSS3", "Animation"],
    preview: "chubb",
  },
];

function NexaPreview() {
  return (
    <div className="project-visual project-website-visual nexa-visual">
      <div className="browser-shell nexa-shell">
        <div className="browser-toolbar">
          <div className="browser-dots">
            <i />
            <i />
            <i />
          </div>
          <div className="browser-address">nexaexperience.com</div>
          <ExternalLink size={13} />
        </div>

        <div className="nexa-page-preview">
          <div className="nexa-nav">
            <strong>NEXA</strong>
            <div className="nexa-nav-links">
              <span>OUR CARS</span>
              <span>DISCOVER</span>
              <span>BUY ONLINE</span>
              <span>LOCATE</span>
            </div>
            <span className="nexa-menu">☰</span>
          </div>

          <div className="nexa-hero">
            <div className="nexa-hero-copy">
              <span className="nexa-eyebrow">NEXA · PREMIUM MOBILITY</span>
              <h4>
                Experience
                <br />
                <em>the extraordinary.</em>
              </h4>
              <p>Explore a refined range of premium cars, designed around every journey.</p>
              <button>
                EXPLORE CARS <ArrowUpRight size={12} />
              </button>
            </div>

            <div className="nexa-car-art">
              <div className="car-glow" />
              <div className="car-body">
                <div className="car-roof" />
                <div className="car-window window-one" />
                <div className="car-window window-two" />
                <div className="car-hood" />
                <div className="car-wheel wheel-one" />
                <div className="car-wheel wheel-two" />
                <div className="car-light" />
              </div>
            </div>
          </div>

          <div className="nexa-bottom">
            <span>01 — PREMIUM DESIGN</span>
            <span>02 — SMART TECHNOLOGY</span>
            <span>03 — PERSONAL EXPERIENCE</span>
          </div>
        </div>

        <a className="preview-overlay" href="https://www.nexaexperience.com" target="_blank" rel="noreferrer">
          <span>VIEW LIVE</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}

function HdfcPreview() {
  return (
    <div className="project-visual project-website-visual hdfc-visual">
      <div className="browser-shell hdfc-shell">
        <div className="browser-toolbar">
          <div className="browser-dots">
            <i />
            <i />
            <i />
          </div>
          <div className="browser-address">applyonline.hdfc.bank.in / personal-loans</div>
          <ExternalLink size={13} />
        </div>
        <div className="hdfc-page-preview">
          <div className="hdfc-nav">
            <strong>HDFC BANK</strong>
            <span>Personal Loans</span>
            <span>Help</span>
          </div>
          <div className="hdfc-progress">
            <span className="done">01 Identify</span>
            <span>02 Offer</span>
            <span>03 Verify</span>
            <span>04 Receive</span>
          </div>
          <div className="hdfc-hero">
            <div>
              <small>PERSONAL LOAN</small>
              <h4>
                Pre-approved loan offer
                <br />
                inside.
              </h4>
              <p>Check your offer in a few simple steps.</p>
              <button>Check eligibility ↗</button>
            </div>
            <div className="hdfc-loan-card">
              <span>QUICK DIGITAL PROCESS</span>
              <strong>₹10L</strong>
              <small>Flexible loan amount</small>
            </div>
          </div>
        </div>
        <a
          className="preview-overlay"
          href="https://applyonline.hdfc.bank.in/personal-loans"
          target="_blank"
          rel="noreferrer"
        >
          <span>VIEW LIVE</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}

function TeliaPreview() {
  const [mode, setMode] = useState<"api" | "cache">("api");

  return (
    <div className="project-visual interactive-visual telia-visual">
      <div className="interactive-window">
        <div className="interactive-topbar">
          <div className="browser-dots">
            <i />
            <i />
            <i />
          </div>
          <span>telia / data-service</span>
          <span className="live-pill">
            <Activity size={11} /> LIVE
          </span>
        </div>

        <div className="data-hero">
          <div>
            <small>NETWORK OVERVIEW</small>
            <strong>98.7%</strong>
            <span>service availability</span>
          </div>
          <div className="pulse-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="data-tabs">
          <button className={mode === "api" ? "active" : ""} onClick={() => setMode("api")}>
            API REQUEST
          </button>
          <button className={mode === "cache" ? "active" : ""} onClick={() => setMode("cache")}>
            CACHE
          </button>
        </div>

        <div className="data-row">
          <span>{mode === "api" ? "GET /customer/data" : "React Query cache"}</span>
          <b>{mode === "api" ? "200 OK" : "HIT · 42ms"}</b>
        </div>
        <div className="data-row muted-row">
          <span>{mode === "api" ? "response payload" : "stale-while-revalidate"}</span>
          <b>{mode === "api" ? "18.4 KB" : "enabled"}</b>
        </div>
      </div>
      <div className="visual-corner">REACT QUERY</div>
    </div>
  );
}

function ChubbPreview() {
  const [plan, setPlan] = useState<"basic" | "plus">("plus");
  const isPlus = plan === "plus";

  return (
    <div className="project-visual interactive-visual chubb-visual">
      <div className="insurance-window">
        <div className="insurance-header">
          <span>CHUBB</span>
          <span>INSURANCE</span>
        </div>

        <div className="coverage-copy">
          <small>YOUR COVERAGE</small>
          <strong>{isPlus ? "$500K" : "$250K"}</strong>
          <span>protection limit</span>
        </div>

        <div className="coverage-meter">
          <span style={{ width: isPlus ? "82%" : "52%" }} />
        </div>

        <div className="plan-switch">
          <button className={!isPlus ? "active" : ""} onClick={() => setPlan("basic")}>
            BASIC
          </button>
          <button className={isPlus ? "active" : ""} onClick={() => setPlan("plus")}>
            PLUS
          </button>
        </div>

        <div className="coverage-grid">
          <div>
            <ShieldCheck size={15} />
            <span>Accident</span>
            <b>Covered</b>
          </div>
          <div>
            <Zap size={15} />
            <span>Response</span>
            <b>{isPlus ? "24/7" : "48h"}</b>
          </div>
        </div>
      </div>
      <div className="visual-corner">REACT · CSS3</div>
    </div>
  );
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  if (project.preview === "nexa") return <NexaPreview />;
  if (project.preview === "hdfc") return <HdfcPreview />;
  if (project.preview === "telia") return <TeliaPreview />;
  return <ChubbPreview />;
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <style>{`
        .project-visual{height:100%;min-height:390px;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:rgba(255,255,255,.12)}
        .project-website-visual{padding:30px 28px 28px}
        .browser-shell{width:88%;height:78%;min-height:285px;position:relative;overflow:hidden;border:1px solid rgba(0,0,0,.18);background:#111;box-shadow:0 24px 50px rgba(0,0,0,.18);transform:rotate(-2deg);transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s ease}
        .project-card:hover .browser-shell{transform:rotate(0) translateY(-5px);box-shadow:0 30px 65px rgba(0,0,0,.24)}
        .browser-toolbar{height:32px;display:flex;align-items:center;gap:10px;padding:0 11px;background:#e9e7df;border-bottom:1px solid rgba(0,0,0,.12);font-size:8px;color:#6a675f;letter-spacing:.04em}
        .browser-dots{display:flex;gap:4px;flex-shrink:0}.browser-dots i{width:6px;height:6px;border-radius:50%;background:#777;display:block}
        .browser-address{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}
        .browser-shell img{display:block;width:100%;height:calc(100% - 32px);object-fit:cover;object-position:top center;background:#f3f2ed}
        .website-fallback{height:calc(100% - 32px);display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#111,#282824);color:#f4f1e8;position:relative;overflow:hidden}
        .website-fallback span{font-size:9px;letter-spacing:.2em;opacity:.6}.website-fallback strong{font-size:30px;letter-spacing:-.04em;margin-top:8px}.fallback-glow{position:absolute;width:180px;height:180px;border-radius:50%;background:#caff00;filter:blur(70px);opacity:.18}
        .preview-overlay{position:absolute;right:14px;bottom:14px;display:flex;align-items:center;gap:5px;padding:9px 12px;background:#10100f;color:#f5f2ea;font-size:9px;font-weight:800;letter-spacing:.12em;opacity:0;transform:translateY(8px);transition:opacity .3s ease,transform .3s ease}
        .browser-shell:hover .preview-overlay{opacity:1;transform:translateY(0)}
        .nexa-page-preview{height:calc(100% - 32px);position:relative;overflow:hidden;background:#101517;color:#fff}.nexa-nav{height:39px;display:flex;align-items:center;padding:0 17px;border-bottom:1px solid rgba(255,255,255,.14);position:relative;z-index:3}.nexa-nav strong{font-size:15px;letter-spacing:.25em;font-weight:800}.nexa-nav-links{display:flex;gap:15px;margin-left:auto;margin-right:14px;font-size:6px;letter-spacing:.12em;opacity:.72}.nexa-menu{font-size:10px;opacity:.7}.nexa-hero{height:calc(100% - 68px);min-height:220px;position:relative;overflow:hidden;background:radial-gradient(circle at 78% 48%,rgba(132,150,158,.28),transparent 28%),linear-gradient(115deg,#0c1113,#182125 62%,#080b0c)}.nexa-hero:after{content:"";position:absolute;inset:auto -10% 0;height:45%;background:linear-gradient(180deg,transparent,rgba(0,0,0,.7));pointer-events:none}.nexa-hero-copy{position:absolute;z-index:2;left:25px;top:25px;width:43%;}.nexa-eyebrow{font-size:6px;letter-spacing:.2em;font-weight:800;opacity:.58}.nexa-hero-copy h4{font-size:27px;line-height:.96;letter-spacing:-.07em;margin:11px 0 9px}.nexa-hero-copy h4 em{font-style:normal;font-weight:400;opacity:.78}.nexa-hero-copy p{font-size:7px;line-height:1.55;color:rgba(255,255,255,.62);max-width:170px}.nexa-hero-copy button{margin-top:13px;display:flex;align-items:center;gap:6px;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.07);color:#fff;padding:7px 9px;font-size:6px;font-weight:800;letter-spacing:.1em}.nexa-car-art{position:absolute;right:-3%;bottom:4%;width:68%;height:70%;}.car-glow{position:absolute;right:20%;top:20%;width:45%;height:45%;background:#8ea3aa;filter:blur(38px);opacity:.25}.car-body{position:absolute;right:3%;bottom:15%;width:88%;height:35%;border-radius:45% 18% 16% 12%;background:linear-gradient(165deg,#e7e8e4,#8b9494 52%,#303638);box-shadow:0 17px 30px rgba(0,0,0,.55);transform:skewX(-7deg)}.car-roof{position:absolute;left:27%;top:-42%;width:44%;height:60%;border-radius:65% 50% 10% 10%;background:linear-gradient(145deg,#c8ced0,#434b4d);border-radius:70% 65% 10% 10%}.car-window{position:absolute;top:-34%;height:42%;background:linear-gradient(145deg,#202a2e,#526269);border:1px solid rgba(255,255,255,.18)}.window-one{left:32%;width:17%;clip-path:polygon(18% 100%,0 0,100% 0,92% 100%)}.window-two{left:50%;width:18%;clip-path:polygon(0 0,92% 8%,100% 100%,8% 100%)}.car-hood{position:absolute;right:-8%;top:12%;width:42%;height:31%;border-radius:0 55% 20% 0;background:linear-gradient(180deg,#aeb6b6,#596163)}.car-wheel{position:absolute;bottom:-25%;width:18%;aspect-ratio:1;border-radius:50%;background:#080a0a;border:5px solid #2c3233;box-shadow:inset 0 0 0 4px #111}.wheel-one{left:18%}.wheel-two{right:13%}.car-light{position:absolute;right:-2%;top:25%;width:13%;height:9%;border-radius:50% 20% 20% 50%;background:#e8f3f3;box-shadow:0 0 16px rgba(220,245,255,.75)}.nexa-bottom{height:29px;display:flex;align-items:center;justify-content:space-around;border-top:1px solid rgba(255,255,255,.12);font-size:5.5px;letter-spacing:.12em;color:rgba(255,255,255,.48)}.hdfc-visual{background:linear-gradient(145deg,#dfeaf5,#f7f8fa)}.hdfc-page-preview{height:calc(100% - 32px);background:#fff;color:#153b63;overflow:hidden}.hdfc-nav{height:42px;display:flex;align-items:center;gap:16px;padding:0 17px;border-bottom:1px solid #dfe4ea;font-size:7px}.hdfc-nav strong{font-size:12px;color:#0d4c87;letter-spacing:-.05em}.hdfc-nav span:first-of-type{flex:1}.hdfc-progress{display:flex;justify-content:space-between;padding:12px 17px 10px;border-bottom:1px solid #edf0f3;font-size:6px;color:#8290a0}.hdfc-progress .done{color:#0d6fb8;font-weight:800}.hdfc-hero{display:grid;grid-template-columns:1.15fr .85fr;gap:12px;padding:25px 18px;background:linear-gradient(135deg,#f7fbff,#fff)}.hdfc-hero small{font-size:7px;letter-spacing:.16em;font-weight:800;color:#58728c}.hdfc-hero h4{font-size:25px;line-height:1.03;letter-spacing:-.06em;margin:7px 0;color:#173d63}.hdfc-hero p{font-size:8px;color:#718096;max-width:160px;line-height:1.4}.hdfc-hero button{margin-top:12px;border:0;background:#0874bd;color:#fff;padding:8px 12px;font-size:7px;font-weight:800;border-radius:2px}.hdfc-loan-card{align-self:center;padding:17px;background:#0c5d98;color:#fff;min-height:120px;box-shadow:0 15px 30px rgba(8,85,140,.2);display:flex;flex-direction:column;justify-content:center}.hdfc-loan-card span{font-size:6px;letter-spacing:.13em;opacity:.7}.hdfc-loan-card strong{font-size:35px;letter-spacing:-.07em;margin:6px 0}.hdfc-loan-card small{font-size:7px;opacity:.72}.interactive-visual{padding:30px}.interactive-window,.insurance-window{width:86%;min-height:285px;border:1px solid rgba(0,0,0,.17);background:rgba(255,255,255,.58);box-shadow:0 24px 55px rgba(0,0,0,.13);transform:rotate(2deg);transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s ease;position:relative;overflow:hidden}
        .project-card:hover .interactive-window,.project-card:hover .insurance-window{transform:rotate(0) translateY(-5px);box-shadow:0 30px 65px rgba(0,0,0,.2)}
        .interactive-topbar{height:35px;padding:0 12px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(0,0,0,.12);font-size:8px;color:#5c5a54;letter-spacing:.07em}.interactive-topbar>span:nth-child(2){flex:1}.live-pill{display:flex;align-items:center;gap:4px;font-weight:800}
        .data-hero{display:flex;justify-content:space-between;align-items:end;padding:24px 22px 16px}.data-hero small,.coverage-copy small{font-size:8px;letter-spacing:.16em;color:#77736a;font-weight:800}.data-hero strong{display:block;font-size:43px;line-height:1;letter-spacing:-.07em;margin-top:7px}.data-hero span{font-size:9px;color:#77736a}.pulse-chart{width:105px;height:65px;display:flex;align-items:end;gap:5px}.pulse-chart i{display:block;width:8px;background:#272723;animation:pulseBars 1.7s ease-in-out infinite}.pulse-chart i:nth-child(1){height:22%;animation-delay:.1s}.pulse-chart i:nth-child(2){height:38%;animation-delay:.2s}.pulse-chart i:nth-child(3){height:30%;animation-delay:.3s}.pulse-chart i:nth-child(4){height:62%;animation-delay:.4s}.pulse-chart i:nth-child(5){height:48%;animation-delay:.5s}.pulse-chart i:nth-child(6){height:78%;animation-delay:.6s}.pulse-chart i:nth-child(7){height:54%;animation-delay:.7s}.pulse-chart i:nth-child(8){height:88%;animation-delay:.8s}.pulse-chart i:nth-child(9){height:68%;animation-delay:.9s}.pulse-chart i:nth-child(10){height:96%;animation-delay:1s}
        @keyframes pulseBars{50%{transform:scaleY(.55);opacity:.55}}
        .data-tabs{display:flex;gap:5px;padding:0 22px 12px}.data-tabs button,.plan-switch button{border:0;background:rgba(0,0,0,.06);padding:7px 9px;font-size:7px;letter-spacing:.12em;font-weight:800;cursor:pointer;color:#747168}.data-tabs button.active,.plan-switch button.active{background:#171714;color:#f7f4ea}
        .data-row{margin:0 22px;padding:10px 0;border-top:1px solid rgba(0,0,0,.1);display:flex;justify-content:space-between;font-size:9px;color:#33322e}.data-row b{font-size:8px}.muted-row{color:#858078}.visual-corner{position:absolute;right:18px;bottom:16px;font-size:8px;font-weight:800;letter-spacing:.14em;color:rgba(0,0,0,.5)}
        .chubb-visual{background:linear-gradient(135deg,rgba(255,255,255,.14),rgba(255,255,255,.3))}.insurance-window{padding:22px;transform:rotate(-2deg)}.insurance-header{display:flex;justify-content:space-between;font-size:9px;letter-spacing:.16em;font-weight:900}.insurance-header span:last-child{opacity:.45}.coverage-copy{padding-top:28px}.coverage-copy strong{display:block;font-size:45px;line-height:1;letter-spacing:-.07em;margin:7px 0 3px}.coverage-copy span{font-size:9px;color:#77736a}.coverage-meter{height:5px;background:rgba(0,0,0,.08);margin:18px 0 15px;overflow:hidden}.coverage-meter span{display:block;height:100%;background:#191916;transition:width .45s cubic-bezier(.22,1,.36,1)}.plan-switch{display:flex;gap:5px}.coverage-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:18px}.coverage-grid div{border:1px solid rgba(0,0,0,.11);padding:10px;display:grid;grid-template-columns:auto 1fr;column-gap:7px;align-items:center}.coverage-grid svg{grid-row:span 2}.coverage-grid span{font-size:8px;color:#77736a}.coverage-grid b{font-size:9px}.chubb-visual .visual-corner{bottom:15px}
        @media(max-width:768px){.project-visual{min-height:250px}.project-website-visual,.interactive-visual{padding:22px 18px}.browser-shell,.interactive-window,.insurance-window{width:92%;min-height:220px}.browser-shell{height:78%}.preview-overlay{opacity:1;transform:none}.data-hero{padding:18px 16px 12px}.data-hero strong,.coverage-copy strong{font-size:35px}.data-tabs,.data-row{margin-left:16px;margin-right:16px;padding-left:0;padding-right:0}.data-tabs{padding-left:0;padding-right:0}.insurance-window{padding:17px}.coverage-copy{padding-top:20px}.coverage-grid{margin-top:12px}}
      `}</style>

      <div className="container">
        <div className="section-heading projects-heading">
          <span>02 / SELECTED WORK</span>
          <h2>
            Real products.
            <br />
            <i>Real constraints.</i>
          </h2>
          <p>
            A closer look at production work — real websites where available, plus interactive previews of the React
            experiences behind the work.
          </p>
        </div>

        <div className="project-stack">
          {projects.map((project) => (
            <article className="project-card" key={project.no}>
              <div className="project-top">
                <span>{project.no}</span>
                <span>{project.type}</span>
              </div>

              <div className="project-body">
                <p className="project-client">{project.client}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.url && (
                  <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                    View live project
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              <ProjectVisual project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
