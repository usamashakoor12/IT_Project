import "./PricingPlans.css";

export default function PricingPlans() {
  const plans = [
    {
      name: "Basic Plan",
      price: "$39",
      duration: "Monthly",
      features: [
        "Free .com & .com.au Hosting",
        "Dedicated Support Team",
        "24/7 System Monitoring",
        "Security Management",
        "Unlimited Downloads",
      ],
    },
    {
      name: "Standard Plan",
      price: "$59",
      duration: "Monthly",
      features: [
        "Free .com & .com.au Hosting",
        "Dedicated Support Team",
        "24/7 System Monitoring",
        "Security Management",
        "Unlimited Downloads",
      ],
    },
    {
      name: "Premium Plan",
      price: "$79",
      duration: "Monthly",
      features: [
        "Free .com & .com.au Hosting",
        "Dedicated Support Team",
        "24/7 System Monitoring",
        "Security Management",
        "Unlimited Downloads",
      ],
    },
  ];

  return (
    <section className="pricing-section">
      <p className="subtitle">PRICING PLANS</p>
      <h2 className="title">Flexible Pricing Plans</h2>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="price">
              {plan.price} <span>/{plan.duration}</span>
            </p>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}
