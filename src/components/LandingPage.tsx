import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/acne_detection_hero.jpg"; // your project hero image
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faMicrochip,
  faShieldVirus,
  faBrain,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  const features = [
    {
      icon: faCamera,
      title: "Image Upload",
      desc: "Upload acne images for detection.",
    },
    {
      icon: faMicrochip,
      title: "AI Analysis",
      desc: "Deep learning powered analysis.",
    },
    {
      icon: faShieldVirus,
      title: "Safe & Private",
      desc: "No data stored permanently.",
    },
    {
      icon: faBrain,
      title: "Accurate Detection",
      desc: "AI model detects acne severity.",
    },
  ];

  return (
    <div className="lp">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg lp-nav">
        <div className="container">
          <a className="navbar-brand fw-bold lp-logo" href="#!">
            <span className="lp-logo-dot" /> AcneDetect AI
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="lp-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="lp-title">AI-Powered Acne Detection</h1>
              <p className="lp-subtitle">
                Detect acne severity instantly using AI. Upload an image and get
                a detailed analysis with recommendations.
              </p>
              <Link to="/upload" className="btn lp-btn-primary">
                Try Now
              </Link>
            </div>

            {/* Hero Image + Floating Cards */}
            <div
              className="col-lg-6"
              data-aos="fade-left"
              style={{ position: "relative" }}
            >
              <img
                src={heroImage}
                alt="Hero"
                className="lp-hero-img img-fluid rounded"
              />
              <div
                className="lp-float-card lp-float-1"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <FontAwesomeIcon icon={faCheckCircle} /> Instant Result
              </div>
              <div
                className="lp-float-card lp-float-2"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <FontAwesomeIcon icon={faShieldVirus} /> Secure & Private
              </div>
            </div>
          </div>

          {/* Features Section */}
          <section id="features" className="lp-feature-row mt-5">
            <div className="row g-3">
              {features.map((f, i) => (
                <div
                  className="col-12 col-md-6 col-lg-3"
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 90}
                >
                  <div className="lp-card lp-hover-card text-center p-4">
                    <div className="lp-icon lp-icon-animated mb-3">
                      <FontAwesomeIcon icon={f.icon} size="2x" />
                    </div>
                    <h6 className="fw-semibold">{f.title}</h6>
                    <p className="text-muted small">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </header>

      {/* Footer */}
      <footer className="text-center py-4 mt-5 border-top">
        <p>© 2026 AcneDetect AI. Developed By Ashiqe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
