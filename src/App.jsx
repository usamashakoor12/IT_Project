// import { Navbar } from "./components/Navbar.jsx"
// import { Hero } from "./components/Hero.jsx"
// import { Routes, Route } from "react-router-dom"
// import  Features  from "./components/Features.jsx"
// import { Gallery } from "./components/Gallery.jsx"
// import { Testimonials } from "./components/Testimonials.jsx"
// import { CTA } from "./components/CTA.jsx"
// import  Footer  from "./components/Footer.jsx"
// import About from "./components/About.jsx"
// import PricingPlans from "./components/PricingPlans.jsx"
// import Testimonialss from "./components/Testimonialss.jsx"

// export default function App() {
//   return (
//     <div className="min-h-dvh">
//       <Navbar />
//       <main>
//         <Hero />
//         <Features />
//         <About/>
//         <PricingPlans/>
//         <Testimonialss/>
//         {/* <Gallery /> */}
//         {/* <Testimonials /> */}
//         {/* <CTA /> */}
//       </main>
//       <Footer />
//     </div>
//   )
// }

import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import PricingPlans from "./components/PricingPlans";
import Testimonialss from "./components/Testimonialss";

// ------------------- Pages -------------------
function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <PricingPlans />
      <Testimonialss />
    </main>
  );
}

function ServicesPage() {
  const services = [
    {
      title: "Database Security",
      description:
        "Protect your sensitive business data with robust database security solutions.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFrzzgaNoXp2WdXuVOspGxtyQfrO4QCs8nw&s",
      link: "#",
      price: "Price: $200",
    },
    {
      title: "IT Consultancy",
      description:
        "Get expert guidance to transform your IT infrastructure and strategy.",
      img: "https://t4.ftcdn.net/jpg/02/00/14/63/360_F_200146338_NTWg7HF65p5z6IUIXzxJbkJ5zlEt3gnG.jpg",
      link: "#",
      price: "Price: $250",
    },
    {
      title: "App Development",
      description:
        "We design and build high-performing mobile and web applications.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZPL9MvS5MVSaUkxMzKqErasFbrcbikkDOA&s",
      link: "#",
      price: "Price: $300",
    },
    {
      title: "Cyber Security",
      description:
        "Stay safe from cyber threats with advanced cybersecurity measures.",
      img: "https://imageio.forbes.com/specials-images/imageserve/5f9fa9e815da35da1356a28b/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds",
      link: "#",
      price: "Price: $220",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful and user-friendly designs that engage your customers.",
      img: "https://img.freepik.com/free-vector/flat-design-ui-ux-background_23-2149093995.jpg",
      link: "#",
      price: "Price: $180",
    },
    {
      title: "IT Management Services",
      description:
        "Let us handle your IT operations while you focus on business growth.",
      img: "https://www.cyberdb.co/wp-content/uploads/2023/03/managed-1.png",
      link: "#",
      price: "Price: $260",
    },
  ];

  return (
    <section className="services-section" style={{ padding: "60px 20px" }}>
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2rem",
          }}
        >
          Our Services
        </h2>
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px", flex: "1" }}>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "10px" }}>
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#555",
                    marginBottom: "15px",
                  }}
                >
                  {service.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "auto",
                  }}
                >
                  <a
                    href={service.link}
                    style={{
                      textDecoration: "none",
                      color: "#0d6efd",
                      fontWeight: "bold",
                    }}
                  >
                    Read More →
                  </a>
                  <span style={{ fontSize: "0.9rem", color: "#333" }}>
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="about-page">
      {/* 🔹 Top Banner with Breadcrumb */}
      <div
        style={{
          background: "url('/images/about-banner.jpg') center/cover no-repeat",
          padding: "80px 20px",
          textAlign: "center",
          // color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>About</h1>
        {/* <p>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </a>{" "}
          › About
        </p> */}
      </div>

      {/* 🔹 About Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "0px 20px 60px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Images */}
        <div
          style={{ flex: "1 1 400px", padding: "20px", textAlign: "center" }}
        >
          <img
            src="https://kashiftechlabs.online/assets/general/images/NinGN5tMJNryGDGpv1ZM.jpg"
            alt="About Us"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "10px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* Right Content */}
        <div style={{ flex: "1 1 500px", padding: "20px" }}>
          <h5 style={{ color: "#0d6efd", marginBottom: "10px" }}>WHO WE ARE</h5>
          <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
            Ensuring Your Success Through Reliable IT Solutions
          </h2>
          <p style={{ fontSize: "1rem", color: "#555", marginBottom: "20px" }}>
            At Powernest, we specialize in delivering high-quality IT
            solutions tailored to your business needs. From consultancy to
            management services, our goal is to empower organizations with
            reliable technology solutions.
          </p>

          {/* Key Points */}
          <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
            <li>✔ Technology Consultancy</li>
            <li>✔ Professional Outsourcing</li>
            <li>✔ IT Infrastructure Support</li>
            <li>✔ Responsive Client Support</li>
          </ul>

          {/* CTA Button + Signature */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a
              href="#"
              style={{
                display: "inline-block",
                background: "#0d6efd",
                color: "#fff",
                padding: "12px 25px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Explore More →
            </a>
            <img
              src="/images/signature.png"
              alt="Signature"
              style={{ height: "40px" }}
            />
          </div>
        </div>
      </div>

      {/* 🔹 Stats Section */}
      <div
        style={{
          background: "#0d6efd",
          color: "#fff",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div>
            <h2>6,561+</h2>
            <p>Successful Clients</p>
          </div>
          <div>
            <h2>600+</h2>
            <p>Finished Projects</p>
          </div>
          <div>
            <h2>250+</h2>
            <p>IT Consultants</p>
          </div>
          <div>
            <h2>590+</h2>
            <p>Business Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section
      className="contact-page"
      style={{
        background: "#fff",
        padding: "60px 20px",
      }}
    >
      {/* 🔹 Contact Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "30px",
        }}
      >
        {/* Left Contact Info */}
        <div
          style={{
            flex: "1 1 320px",
            background: "#0d6efd",
            color: "#fff",
            borderRadius: "16px",
            padding: "40px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "15px", fontSize: "22px" }}>
            Contact Information
          </h3>
          <p style={{ marginBottom: "25px", opacity: "0.9" }}>
            Get in Touch with Powernest
          </p>

          <p style={{ marginBottom: "20px" }}>
            📞 Call Us 24/7: <br />
            <strong>+19295412830</strong>
          </p>
          <hr style={{ border: "0.5px solid rgba(255,255,255,0.3)" }} />

          <p style={{ margin: "20px 0" }}>
            ✉️ Make a Quote: <br />
            <a
              href="nousheen.shahryar2012@gmail.com"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
             nousheen.shahryar2012@gmail.com
            </a>
          </p>
          <hr style={{ border: "0.5px solid rgba(255,255,255,0.3)" }} />

          <p style={{ margin: "20px 0" }}>
            📍 Location: <br />
            3744 Amboy road Staten island  <br /> New York 10308
          </p>

          {/* Social Links */}
          <div style={{ marginTop: "30px" }}>
            <p style={{ marginBottom: "10px" }}>Follow Social:</p>
            <div style={{ display: "flex", gap: "15px", fontSize: "20px" }}>
              <a href="#" style={{ color: "#fff" }}>
                🌐
              </a>
              <a href="#" style={{ color: "#fff" }}>
                👍
              </a>
              <a href="#" style={{ color: "#fff" }}>
                🐦
              </a>
              <a href="#" style={{ color: "#fff" }}>
                ▶
              </a>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div
          style={{
            flex: "2 1 500px",
            background: "#fff",
            borderRadius: "16px",
            padding: "40px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            border: "1px solid #f0f0f0",
          }}
        >
          <h5 style={{ color: "#0d6efd", marginBottom: "10px" }}>
            GET IN TOUCH
          </h5>
          <h2 style={{ marginBottom: "20px" }}>Ready To Get Started?</h2>
          <p style={{ marginBottom: "30px", color: "#555", lineHeight: "1.6" }}>
            Let’s bring your ideas to life with cutting-edge technology
            solutions! Contact Powernest today and take your business to
            the next level.
          </p>

          {/* Form */}
          <form>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                marginBottom: "15px",
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                style={{
                  flex: "1 1 250px",
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "15px",
                  background: "#fff", // ✅ ensures white bg
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                style={{
                  flex: "1 1 250px",
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "15px",
                  background: "#fff", // ✅ ensures white bg
                }}
              />
            </div>

            <textarea
              placeholder="Write Message"
              rows="5"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                marginBottom: "20px",
                fontSize: "15px",
                background: "#fff", // ✅ ensures white bg
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                background: "#0d6efd",
                color: "#fff",
                border: "none",
                padding: "14px 28px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "15px",
                boxShadow: "0 4px 12px rgba(13,110,253,0.3)",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#084298")}
              onMouseOut={(e) => (e.target.style.background = "#0d6efd")}
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>

      {/* 🔹 Google Map Embed */}
      <div
        style={{
          width: "100%",
          height: "400px",
          marginTop: "50px",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.003342216761!2d-76.74454!3d39.27266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81b2e3a1d3c1b%3A0x76d53a3dbb68c9b0!2s139%20Cherrydell%20Rd%2C%20Catonsville%2C%20MD%2021228!5e0!3m2!1sen!2sus!4v1692820400000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export function Agreement() {
  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        lineHeight: "1.8",
        // color: "#f5f5f5", // light text for black background
        fontFamily: "Arial, sans-serif",
        // backgroundColor: "black",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px", color: "#fff" }}>
        Customer Agreement
      </h3>
      <p style={{ textAlign: "center", marginBottom: "30px", color: "#bbb" }}>
        Effective Date: Jan 1, 2025
      </p>

      <p>
        This Customer Agreement is made between{" "}
        <b style={{ color: "#4dabf7" }}>Powernest.online</b> and the
        (Customer). By accessing or using our services, you agree to comply with
        and be bound by the terms outlined in this Agreement.
      </p>

      {/* Section 1 */}
      <h4 style={{ color: "#4dabf7" }}>
        1. Business Overview and Services Provided
      </h4>
      <p>
        Powernest.online specializes in providing digital marketing
        solutions with a primary focus on software solutions, through various
        online channels. We create tailored digital marketing campaigns,
        technology tools and marketing strategies that connect with potential
        customers across multiple platforms. Our services include software
        coding, software product development, and delivering updated software
        tools that meet market demands and expectations.
      </p>
      <p>
        Our team collaborates to enhance transaction transparency, improve
        performance, and ensure information protection. We pride ourselves on
        delivering high-quality software and digital solutions that promote
        customer satisfaction and quick adaptation to changes in the digital
        landscape.
      </p>

      {/* Section 2 */}
      <h4 style={{ color: "#4dabf7" }}>2. Payment Terms</h4>
      <p>We accept payments through the following methods:</p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Visa</li>
        <li>MasterCard</li>
        <li>Discover</li>
      </ul>
      <p>
        All payments must be made in full prior to service initiation unless
        otherwise agreed upon. Payment information is processed securely in
        compliance with applicable standards.
      </p>

      {/* Section 3 */}
      <h4 style={{ color: "#4dabf7" }}>
        3. Data Sharing & Third-Party Services
      </h4>
      <p>
        We do not share your information with third parties except in the
        following cases:
      </p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          <b>Service Providers:</b> For functions such as payment processing,
          order fulfillment, email communications, or analytics.
        </li>
        <li>
          <b>Legal Requirements:</b> If required by law, court order, or
          government authority.
        </li>
        <li>
          <b>Business Transfers:</b> In the event of a company acquisition,
          merger, or asset transfer.
        </li>
      </ul>

      {/* Section 4 */}
      <h4 style={{ color: "#4dabf7" }}>4. Data Security & Retention</h4>
      <p>
        We implement industry-standard security measures to protect your
        personal data from unauthorized access, loss, or misuse. We retain your
        information only as long as necessary for legitimate business purposes,
        unless otherwise required by law.
      </p>

      {/* Section 5 */}
      <h4 style={{ color: "#4dabf7" }}>5. Your Rights & Choices</h4>
      <p>You have the following rights regarding your personal information:</p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Access: Request a copy of the information we store about you.</li>
        <li>Correction: Request corrections to inaccurate information.</li>
        <li>
          Deletion: Request deletion of your personal information, subject to
          legal/operational requirements.
        </li>
        <li>Opt-Out: Opt out of receiving marketing communications.</li>
      </ul>

      {/* Section 6 */}
      <h4 style={{ color: "#4dabf7" }}>6. Refund/Return Policy</h4>
      <p>
        Refunds and returns policies are governed by the terms and conditions of
        Powernest.online. Refund eligibility varies depending on the
        service provided. For detailed refund policies, please contact our
        customer support.
      </p>

      {/* Section 7 */}
      <h4 style={{ color: "#4dabf7" }}>7. Privacy Policy</h4>
      <p>
        We collect, store, and use data in accordance with our Privacy Policy.
        Our Privacy Policy outlines how we collect, store, and share customer
        data, and explains your rights regarding your personal information. We
        comply with relevant privacy laws and regulations.
      </p>

      {/* Section 8 */}
      <h4 style={{ color: "#4dabf7" }}>8. Dispute Resolution</h4>
      <p>
        In case of disputes, customers agree to first contact our support team
        for resolution. If the dispute is not resolved, it may be referred to
        mediation or arbitration, as permitted by the governing laws of the
        service location.
      </p>

      {/* Section 9 */}
      <h4 style={{ color: "#4dabf7" }}>9. Limitation of Liability</h4>
      <p>
        To the fullest extent permitted by law, our liability for damages or
        losses caused by the use of our services is limited to the amount paid
        by the customer for the service. We disclaim any liability for
        consequential or incidental damages.
      </p>

      {/* Section 10 */}
      <h4 style={{ color: "#4dabf7" }}>10. Changes to the Agreement</h4>
      <p>
        Powernest.online reserves the right to modify or update this
        Agreement at any time. Customers will be notified of significant changes
        by email or website notice.
      </p>

      {/* Section 11 */}
      <h4 style={{ color: "#4dabf7" }}>11. Contact Information</h4>
      <p>
        For questions or concerns about this Agreement, contact us at:{" "}
        <b style={{ color: "#4dabf7" }}>Powernest.online</b>
        <br />
        Email: nousheen.shahryar2012@gmail.com <br />
        Phone: +19295412830
      </p>
    </section>
  );
}

export function Terms() {
  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        lineHeight: "1.8",
        // color: "#f5f5f5", // light text for black background
        fontFamily: "Arial, sans-serif",
        // backgroundColor: "black",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px", color: "#fff" }}>
        Terms & Conditions
      </h3>
      <p style={{ textAlign: "center", marginBottom: "30px", color: "#bbb" }}>
        Effective Date: Jan 1, 2025
      </p>

      <p>
        This Terms & Conditions Agreement is made between{" "}
        <b style={{ color: "#4dabf7" }}>Powernest.online</b> and the
        (Customer). By accessing or using our services, you agree to comply with
        and be bound by the terms outlined in this Agreement.
      </p>

      {/* Section 1 */}
      <h4 style={{ color: "#4dabf7" }}>
        1. Business Overview and Services Provided
      </h4>
      <p>
        Powernest.online specializes in delivering digital products, with a
        primary focus on software solutions, through various online channels. We
        utilize a combination of digital marketing strategies, including social
        media marketing, email campaigns, and retargeting techniques, to reach
        potential customers across multiple platforms.
      </p>
      <p>
        Our online services feature a comprehensive catalog of software and
        other digital products regularly updated to reflect the latest market
        trends and demands.
      </p>
      <p>
        Once a customer selects a product and completes the payment process, our
        team verifies the transaction through a follow-up phone call to ensure
        accuracy and security. After verification, we promptly deliver the
        purchased software or digital product to the customer's provided email
        address. This process ensures a seamless and secure transaction
        experience and maintains high customer satisfaction.
      </p>

      {/* Section 2 */}
      <h4 style={{ color: "#4dabf7" }}>2. Payment Terms</h4>
      <p>We accept payments through the following methods:</p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Visa</li>
        <li>MasterCard</li>
        <li>Discover</li>
        <li>American Express</li>
      </ul>
      <p>
        All payments must be made in full prior to service initiation unless
        otherwise agreed upon. Payment information is processed securely in
        compliance with applicable regulations.
      </p>

      {/* Section 3 */}
      <h4 style={{ color: "#4dabf7" }}>
        3. Data Sharing & Third-Party Services
      </h4>
      <p>
        We do not sell, rent, or share your personal data with third parties
        except in the following cases:
      </p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          <b>Service Providers:</b> We may share data with third parties who
          assist with payment processing, order fulfillment, email
          communications, or analytics.
        </li>
        <li>
          <b>Legal Requirements:</b> If required by law, court order, or
          government authority.
        </li>
        <li>
          <b>Business Transfers:</b> In the event of a merger, acquisition, or
          sale of company assets, customer data may be transferred.
        </li>
      </ul>

      {/* Section 4 */}
      <h4 style={{ color: "#4dabf7" }}>4. Data Security & Retention</h4>
      <p>
        We implement industry-standard security measures to protect your
        personal data from unauthorized access, loss, or misuse. We retain your
        information only as long as necessary to fulfill the purposes outlined
        in this policy, unless required by law to keep it longer.
      </p>

      {/* Section 5 */}
      <h4 style={{ color: "#4dabf7" }}>5. Your Rights & Choices</h4>
      <p>You have the following rights regarding your personal information:</p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          <b>Access & Correction:</b> Request access to and correction of your
          personal data.
        </li>
        <li>
          <b>Opt-Out:</b> Opt-out from receiving marketing emails or promotional
          messages.
        </li>
        <li>
          <b>Data Deletion:</b> Request deletion of your information, subject to
          legal or operational requirements.
        </li>
      </ul>

      {/* Section 6 */}
      <h4 style={{ color: "#4dabf7" }}>6. Dispute Resolution</h4>
      <p>
        In the event of a dispute arising out of or related to this Agreement or
        our services, the parties agree to resolve such disputes through
        mediation or arbitration. The terms of the process can be found in our
        Terms of Service. We encourage customers to contact us for informal
        resolution first.
      </p>

      {/* Section 7 */}
      <h4 style={{ color: "#4dabf7" }}>7. Limitation of Liability</h4>
      <p>
        Our liability is limited to the value of the service purchased. We are
        not responsible for any damages, losses, or disruptions to your business
        caused by the use of our services.
      </p>

      {/* Section 8 */}
      <h4 style={{ color: "#4dabf7" }}>8. Changes to the Agreement</h4>
      <p>
        Powernest.online reserves the right to modify or update this
        Agreement at any time. We will notify customers of significant changes
        via email or through updates on our website.
      </p>

      <p style={{ marginTop: "30px" }}>
        By using our services, you acknowledge that you have read, understood,
        and agree to the terms of this Agreement.
      </p>
    </section>
  );
}



import { useLocation } from "react-router-dom";
import LoginPage from "./components/LoginPage";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 
        ${isHome ? "bg-neutral-950 text-white" : "bg-white text-black"}`}
    >
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Agreement />} />
          <Route path="/terms" element={<Terms />} />
           <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
