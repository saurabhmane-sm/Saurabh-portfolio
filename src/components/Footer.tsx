export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Saurabh Mane</span>
        <span>Built with React · TypeScript · CSS</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}