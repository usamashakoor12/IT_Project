import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-about">
          <h3>POWERNEST</h3>
          <p>
            Helping businesses grow with IT services, consultancy, and app
            development solutions. We provide world-class support and results.
          </p>
          <div className="socials">
            <span>🌐</span>
            <span>🐦</span>
            <span>💼</span>
          </div>
        </div>

        {/* Middle */}
        <div className="footer-links">
          <h4>Our Services</h4>
          <ul>
            <li>Database Security</li>
            <li>IT Consultancy</li>
            <li>App Development</li>
            <li>Digital Marketing</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>3744 Amboy road Staten island </p>
          <p>New York 10308</p>
          <p>📧 nousheen.shahryar2012@gmail.com</p>
          <p>📞 +19295412830</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Powernest. All Rights Reserved.
      </div>
    </footer>
  );
}
