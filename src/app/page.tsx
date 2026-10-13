export default function Home() {
  return (
    <div className="shell">
      <div className="container">
        <div className="hero">
          <div>
            <div className="eyebrow">Crop Problem Solving</div>
            <h1>Your field expert in your pocket</h1>
            <p>Report crop problems with your voice, camera or words. Get expert help and prevention guidance, rooted in local knowledge.</p>
            <div className="choice-grid">
              <a href="/farmer" className="card card-pad choice-card">
                <div className="choice-icon">Farmer</div>
                <h2>I&apos;m a Farmer</h2>
                <p>Report a crop problem, track expert guidance and follow-ups.</p>
              </a>
              <a href="/expert/dashboard" className="card card-pad choice-card">
                <div className="choice-icon">Expert</div>
                <h2>I&apos;m an Expert</h2>
                <p>Review cases, detect hotspots and publish alerts for your region.</p>
              </a>
            </div>
            <div className="demo-note">
              <div className="dot"></div>
              <span>Demo Mode · All data is synthetic and resets daily</span>
            </div>
          </div>
          <div className="hero-art">Field</div>
        </div>
      </div>
    </div>
  );
}
