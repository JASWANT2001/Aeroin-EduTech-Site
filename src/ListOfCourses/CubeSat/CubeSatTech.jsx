import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CubeSatOverview from "./CubeSatOverview";
import CourseDetails from "./CourseDetails";
import SkillsGain from "./SkillsGain";
import CertificationSection from "./CertificationSection";
import Achieve from "./Achieve";
import CoursePlan from "./CoursePlan";
import PlanEnquiry from "../../CoursePage/PlanEnquiry";
import FeedBack from "../../HomePage/FeedBack";
import WhatsApp from "../../assets/Whatsapp";

function CubeSatTech() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, [pathname]); // Effect triggered whenever the pathname changes
  return (
    <>
      <CubeSatOverview />
      <CourseDetails />
      <SkillsGain />
      <CertificationSection />
      <Achieve />
      <CoursePlan />
      <PlanEnquiry />
      <FeedBack />
      <WhatsApp/>
    </>
  );
}

export default CubeSatTech;
