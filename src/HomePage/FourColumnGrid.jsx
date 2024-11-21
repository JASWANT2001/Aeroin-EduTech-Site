import React from "react";
import { useNavigate } from "react-router-dom";

function FourColumnGrid() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/course");
  };

  return (
    <>
      <div className="grid-section" data-aos="fade-up" data-aos-duration={1500}>
        <section className="aeroin-edutech-grid">
          <a className="grid-item" href="/course">
            <h3>
              <i className="fas fa-flask" /> Research Program
            </h3>
            <ul>
              <li>Collaborate with experts in space tech</li>
              <li>Hands-on satellite &amp; propulsion experience</li>
              <li>In-depth research opportunities</li>
            </ul>
          </a>
          <a className="grid-item" href="/course">
            <h3>
              <i className="fas fa-video" /> LIVE Sessions
            </h3>
            <ul>
              <li>Interactive sessions with space professionals</li>
              <li>Learn about satellite deployment &amp; propulsion</li>
              <li>Engage in live Q&amp;A with experts</li>
            </ul>
          </a>
          <a className="grid-item" href="/course">
            <h3>
              <i className="fas fa-graduation-cap" /> Focused Learning
            </h3>
            <ul>
              <li>Comprehensive space technology curriculum</li>
              <li>Focus on satellite systems and propulsion</li>
              <li>Tailored for future space professionals</li>
            </ul>
          </a>
          <a className="grid-item" href="/course">
            <h3>
              <i className="fas fa-cogs" /> Practical Projects
            </h3>
            <ul>
              <li>Hands-on experience with CubeSat building</li>
              <li>Work on drones and real-world projects</li>
              <li>Industry-led guidance in space innovation</li>
            </ul>
          </a>
        </section>
      </div>
    </>
  );
}

export default FourColumnGrid;
