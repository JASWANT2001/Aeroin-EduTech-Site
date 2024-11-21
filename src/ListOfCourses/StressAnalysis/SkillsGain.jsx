import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillsGain() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      offset: 100, // Offset from the original trigger point
      easing: "ease-out", // Easing animation type
      once: true, // Animate only once when scrolled into view
    });
  }, []);

  return (
    <>
      <div className="space-program-overview">
        <h2 data-aos="fade-up" data-aos-delay="0">
          Skills You’ll Develop by the End of This Program
        </h2>
        <div className="space-content">
          <div className="space-left">
            <div className="space-item" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-robot" />
              <p>
                Ability to analyze and interpret structural systems and common
                failures.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-tools" />
              <p>
                Proficiency in estimating and calculating potential structural
                failures.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-user-graduate" />
              <p>
                Knowledge of composite materials and their applications in
                design.
              </p>
            </div>
          </div>
          <div className="space-right">
            <div className="space-item" data-aos="fade-up" data-aos-delay="800">
              <i className="fas fa-brain" />
              <p>
                Competence in creating and analyzing 1D, 2D, and 3D FEM models.
              </p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1000">
              <i className="fas fa-handshake" />
              <p>Understanding of key aircraft components and load paths.</p>
            </div>
            <div className="space-item" data-aos="fade-up" data-aos-delay="1200">
              <i className="fas fa-satellite" />
              <p>
                Insight into industry standards and methods in structural
                analysis and materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsGain;