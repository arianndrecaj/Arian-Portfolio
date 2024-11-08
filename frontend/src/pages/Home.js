import React from 'react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero text-center py-5" style={{ backgroundColor: '#ffffff' }}>
        <h1 className="display-4 mb-3">Welcome to My Portfolio</h1>
        <p className="lead text-muted">Hi, I'm Arian, a passionate web developer.</p>
        <a href="/about" className="btn btn-primary mt-3">Discover More</a>
      </section>

      {/* My Skills Section */}
      <section className="skills text-center py-5">
        <h2>Skills & Expertise</h2>
        <p className="text-muted">I specialize in web development, creating sleek and functional web interfaces.</p>
        <ul className="list-inline">
          <li className="list-inline-item"><strong>Laravel</strong></li>
          <li className="list-inline-item"><strong>React</strong></li>
          <li className="list-inline-item"><strong>Node.js</strong></li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="cta text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <h3>Let’s Build Something Great Together!</h3>
        <a href="/contact" className="btn btn-outline-primary mt-3">Get in Touch</a>
      </section>
    </div>
  );
}

export default Home;
