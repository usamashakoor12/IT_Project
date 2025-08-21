import "./Features.css";

const caseStudies = [
  {
    title: "Database Security",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrIYcIXyUjaLUUxX4NsZOEbjBbfhnJzaKlg&shttps://www.scnsoft.com/blog-pictures/information-security/7-best-practices-for-database-security.png",
  },
  {
    title: "IT Consultancy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPT-OB76s4i5xzbc-nCsn9_vDRp96Q8e8H6A&s",
  },
  {
    title: "App Development",
    img: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg",
  },
  {
    title: "Database Security",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuE5HgN3S7rZfF5XFHnExWpncPe_9r4hlXw&s",
  },
  {
    title: "Cybersecurity",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGoV4-fHEZ7zDD4HbCUMltCI-zzBrJu18ZA&s",
  },
  {
    title: "Cloud Solutions",
    img: "https://imageio.forbes.com/specials-images/imageserve/5f9fa9e815da35da1356a28b/0x0.jpg?format=https://imageio.forbes.com/specials-images/imageserve/5f9fa9e815da35da1356a28b/0x0.jpg?format=jpg&height=600&width=1200&fit=boundsjpg&height=600&width=1200&fit=bounds",
  },
];

export default function Features() {
  return (
    <section className="features-section">
      {/* Subtitle */}
      <div className="subtitle">From Our Case Studies</div>

      {/* Title */}
      <h2 className="title">We Delivered Best Solution</h2>

      {/* Grid */}
      <div className="grid">
        {caseStudies.map((item, index) => (
          <div key={index} className="card">
            <div className="image-container">
              <img src={item.img} alt={item.title} />
              <div className="label">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
