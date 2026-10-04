import { ArrowUpRight, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div className="contact-eyebrow">06 / LET'S CONNECT</div>

        <h2>
          Have a product
          <br />
          <i>worth building?</i>
        </h2>

        <p>
          Open to interesting frontend and full-stack opportunities,
          product collaborations and conversations.
        </p>

        <a
          className="big-mail"
          href="mailto:saurabh7028sm@gmail.com"
        >
          saurabh7028sm@gmail.com <ArrowUpRight size={25} />
        </a>

        <div className="contact-meta">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=saurabh7028sm@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Mail size={16} /> Email me
          </a>

          <a href="tel:+919325896561">
            <Phone size={16} /> +91 9325 896561
          </a>
        </div>
      </div>
    </section>
  );
}
