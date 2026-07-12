import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const skills = [
  { icon: "./assets/icons/python.svg", label: "Python" },
  { icon: "./assets/icons/js.svg", label: "JavaScript" },
  { badge: "TS", label: "TypeScript" },
  { icon: "./assets/icons/react.svg", label: "React" },
  { badge: "ng", label: "Angular" },
  { icon: "./assets/icons/node.svg", label: "Node.js" },
  { icon: "./assets/icons/express.png", label: "Express.js" },
  { badge: "AWS", label: "AWS Lambda" },
  { badge: "▢", label: "Docker" },
  { icon: "./assets/icons/sql.svg", label: "SQL" },
  { badge: "PG", label: "PostgreSQL" },
  { icon: "./assets/icons/mysql.svg", label: "MySQL" },
  { icon: "./assets/icons/mongodb.svg", label: "MongoDB" },
  { icon: "./assets/icons/git.svg", label: "Git" },
  { icon: "./assets/icons/html.svg", label: "HTML5" },
  { icon: "./assets/icons/css.svg", label: "CSS3" },
  { badge: "AI", label: "Claude API / LLMs" },
  { badge: "∑", label: "Optimization (Gurobi)" },
];

const AboutMe = ({ handlePageChange }) => {
  useEffect(() => {
    gsap.from(".divEl", { opacity: 0, duration: 1, y: -50, stagger: 0.6 });
    gsap.from(".my-image", { opacity: 0, duration: 2, x: -50, stagger: 0.6 });

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".shadow-separation").forEach(elem => {
      gsap
        .timeline({ scrollTrigger: { trigger: elem } })
        .from(elem, { opacity: 0, duration: 1, scaleX: 2, scaleY: 2, x: 50 })
        .to(elem, {
          opacity: 1,
          duration: 1,
          scaleX: 1,
          scaleY: 1,
          stagger: 0.6,
          x: 0,
        });
    });
  });

  return (
    <main>
      <div className="container row home-main mx-auto mt-lg-5">
        <div className="col-lg-6 col-md-12">
          <h1 className="job-text my-lg-5 divEl">
            <span>About Me</span>
          </h1>
          <h6 className="description-text divEl">
            Computing has held a life-long fascination for me &mdash; from
            building my first computer to wondering how a compilation of
            simple ideas and components can interact to produce something as
            complex and adaptable as a finished piece of software. That
            curiosity took me from the UNC Chapel Hill Coding Boot Camp into
            five years as a professional software engineer, building
            full-stack web applications, serverless backends, and
            optimization systems for retail and legal-tech platforms. More
            recently I've been expanding into applied AI &mdash; building
            LLM-powered tooling and earning Data Scientist and AI Associate
            credentials through NC State University's AI Academy.
            <br />
            <br />
            I bring an unconventional path into tech: an MD with a background
            in abdominal surgery, and years managing high-volume restaurant
            operations. That combination shows up in how I approach
            problem-solving under pressure, work cross-functionally, and stay
            focused on the end result.
          </h6>
          <br />
          <div
            onClick={() => handlePageChange("ContactMe")}
            className="divEl devLink"
          >
            Contact Me{">"}
          </div>
        </div>
        <img
          className="col-lg-6 col-md-12 my-image p-0"
          src="./assets/images/muiasar-photo.jpg"
          alt="Muiasar Al Ani"
        />
      </div>

      <div className="row container mx-auto mt-5">
        <h1>Skills</h1>
      </div>
      <div className="row container mx-auto mt-5 align-items-end">
        {skills.map(skill => (
          <div
            className="col-lg-1 col-md-2 col-sm-3 text-center"
            key={skill.label}
          >
            {skill.icon ? (
              <img
                src={skill.icon}
                className="shadow-separation"
                width="50px"
                alt={skill.label}
              />
            ) : (
              <div className="skill-badge shadow-separation">
                {skill.badge}
              </div>
            )}
            <p className="py-2">{skill.label}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AboutMe;
