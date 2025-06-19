import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="main-heading">Transform Your Notes with NeuraNotes</h1>
        <p>Upload, organize, and find your notes easily with AI-powered assistance.</p>
        <div className="hero-buttons">
          <Link to="./Notes" className="home-btn primary-btn">Get Started</Link>
          <Link to="./Blog" className="home-btn secondary-btn">Learn More</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose NeuraNotes?</h2>
        <div className="features-grid">
          {[
            { icon: "📄", title: "Smart Organization", description: "Automatically categorize and search your uploaded notes with ease." },
            { icon: "🤖", title: "AI Assistance", description: "Get real-time study help with our integrated AI-powered assistant." },
            { icon: "🔍", title: "Quick Search", description: "Find specific notes instantly with our powerful search engine." },
            { icon: "📚", title: "Summarization", description: "Get concise summaries of your notes to revise faster." },
          ].map((feature, index) => (
            <div className="card" key={index}>
              <div className="card-info">
                <span className="icon">{feature.icon}</span>
                <p className="title">{feature.title}</p>
                <p className="description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          {[
            { icon: "📤", title: "Upload Notes", description: "Upload your handwritten or digital notes in seconds." },
            { icon: "🧠", title: "AI Organizes", description: "Our AI processes, structures, and summarizes your notes." },
            { icon: "🔍", title: "Search & Access", description: "Find what you need instantly with smart search." },
          ].map((step, index) => (
            <div className="step" key={index}>
              <h3>{step.icon} {step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Organizing Your Notes Smarter!</h2>
        <p>Experience AI-powered note management with NeuraNotes.</p>
        <Link to="/Notes" className="home-btn primary-btn">Get Started</Link>
      </section>
    </div>
  );
}
