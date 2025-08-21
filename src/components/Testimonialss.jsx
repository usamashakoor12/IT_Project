import "./Testimonials.css";

export default function Testimonialss() {
  const testimonials = [
    {
      name: "James",
      role: "Client",
      text: "Superb solutions and great dedication! Powernest optimized our SEO and digital marketing campaigns. Team was really professional.",
    },
    {
      name: "Alex Pranto",
      role: "Client",
      text: "Helpful, fast, innovative and responsive! These team built an amazing website for our business, and results were beyond expectations.",
    },
    {
      name: "Ayasha",
      role: "Client",
      text: "Very talented team, excellent communication, and fantastic results. Our Flutter app project was delivered on time and within budget.",
    },
  ];

  return (
    <section className="testimonials-section">
      <p className="subtitle">TESTIMONIALS</p>
      <h2 className="title">
        Hundreds Of Clients Worldwide Trust Our IT Solution
      </h2>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p>"{t.text}"</p>
            <h4>{t.name}</h4>
            <span>{t.role}</span>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </div>
    </section>
  );
}
