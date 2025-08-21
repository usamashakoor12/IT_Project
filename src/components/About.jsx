import "./About.css";
// import personImg from "../assets/person.png"; // replace with your image

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-left">
          <p className="subtitle">ABOUT POWERNEST</p>
          <h2 className="title">Selecting The Finest IT Service Provider</h2>
          <p className="description">
            At Powernest, we are passionate about transforming ideas into
            powerful digital solutions. With expertise in website development,
            Flutter app development, SEO, and digital marketing, we help
            businesses establish a strong online presence and achieve their
            goals. Our team of skilled professionals is dedicated to delivering
            cutting-edge technology solutions that are efficient, scalable, and
            user-friendly...
          </p>

          {/* Feature badges */}
          <div className="features">
            <div className="feature-box">📈 Business Growth</div>
            <div className="feature-box">💻 Technology Consultancy</div>
          </div>

          {/* Founder + Contact */}
          <div className="founder-contact">
            <div>
              <h4>Adam White</h4>
              <p>Co, Founder</p>
            </div>
            <div>
              <h4>Call Us Now</h4>
              <p>+19295412830</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="about-right">
            {/* <div className="img">Image</div> */}
          <img src='https://kashiftechlabs.online/assets/general/images/9u660LPq1htqp3epDbVc.png' alt="About us" />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat">
          <h3>6,561+</h3>
          <p>Satisfied Clients</p>
        </div>
        <div className="stat">
          <h3>600+</h3>
          <p>Finished Projects</p>
        </div>
        <div className="stat">
          <h3>250+</h3>
          <p>Skilled Experts</p>
        </div>
        <div className="stat">
          <h3>590+</h3>
          <p>Media Posts</p>
        </div>
      </div>
    </section>
  );
}
