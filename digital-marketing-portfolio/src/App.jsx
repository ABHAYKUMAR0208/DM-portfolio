import "./App.css";

export default function App() {
  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <h3>Abhay Kumar</h3>
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Digital Marketing Specialist</span>
          <h1>
            Building brands through content, video, SEO & data-driven growth
          </h1>
          <p>
            Hands-on digital marketer experienced in end-to-end content creation,
            video editing, social media management, SEO, and performance tracking
            across LinkedIn, YouTube, and Instagram.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn primary">View Portfolio</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a hands-on Digital Marketing Specialist with experience managing
          end-to-end content creation, video editing, social media management,
          and SEO across platforms like LinkedIn, YouTube, and Instagram.
        </p>
        <p>
          I focus on building strong brand presence through storytelling,
          structured content strategies, and consistent execution. I enjoy
          working across the full marketing lifecycle — from ideation and
          creation to publishing, optimization, and reporting.
        </p>
        <p>
          With a strong interest in analytics and digital growth, I continuously
          improve campaigns based on performance data, audience behavior, and
          platform insights.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-alt">
        <h2>Skills & Expertise</h2>

        <div className="services">
          <div className="card">
            <h4>Content Writing & Strategy</h4>
            <p>
              LinkedIn posts, YouTube scripts, blogs, emailers, newsletters,
              landing pages, content calendars, and SEO-friendly captions,
              ad copies, and scripts.
            </p>
          </div>

          <div className="card">
            <h4>Social Media Management</h4>
            <p>
              Planning, creating, scheduling, and optimizing content across
              LinkedIn, Instagram, and YouTube with focus on reach, engagement,
              trends, and competitor analysis.
            </p>
          </div>

          <div className="card">
            <h4>Video Editing & Creative</h4>
            <p>
              Editing reels, shorts, and long-form YouTube videos. Creating
              thumbnails, banners, and creatives using Canva and video
              editing tools.
            </p>
          </div>

          <div className="card">
            <h4>SEO & YouTube Optimization</h4>
            <p>
              On-page SEO, keyword research, blog optimization, Google rankings,
              and YouTube SEO including titles, tags, keywords, and metadata.
            </p>
          </div>

          <div className="card">
            <h4>Analytics & Reporting</h4>
            <p>
              Performance tracking using Google Analytics, Search Console,
              YouTube Studio, and social insights with weekly and monthly
              reporting and optimization.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="section">
        <h2>Portfolio</h2>

        <div className="work">
          <img src="https://images.unsplash.com/photo-1556761175-129418cb2dfe" />
          <h4>LinkedIn Content Growth</h4>
          <p>
            Designed and executed a structured LinkedIn content strategy focused
            on storytelling and performance insights to improve reach and
            engagement.
          </p>
        </div>

        <div className="work">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" />
          <h4>YouTube SEO Optimization</h4>
          <p>
            Optimized titles, thumbnails, descriptions, and metadata to improve
            discoverability, CTR, and watch time.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>

        <div className="contact-box">
          <p><strong>Email:</strong> <a href="mailto:02abhaykumarr@gmail.com">02abhaykumarr@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+917895327706">+91 7895327706</a></p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/abhay-kumar-283a25224"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/abhay-kumar-283a25224
            </a>
          </p>
        </div>
      </section>

      <footer className="footer">
        © 2025 Abhay Kumar · Digital Marketing Specialist
      </footer>
    </div>
  );
}
