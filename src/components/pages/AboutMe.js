import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const skills = [
  { icon: "./assets/icons/python.svg", label: "Python" },
  { badge: "AI", label: "Claude API / LLMs" },
  { fa: "fa-cogs", label: "Machine Learning" },
  { badge: "∑", label: "Optimization (Gurobi)" },
  { icon: "./assets/icons/aws.svg", label: "AWS Lambda" },
  { icon: "./assets/icons/docker.svg", label: "Docker" },
  { icon: "./assets/icons/postgresql.svg", label: "PostgreSQL" },
  { icon: "./assets/icons/mysql-fix.svg", label: "MySQL" },
  { fa: "fa-database", label: "SQL" },
  { icon: "./assets/icons/js.svg", label: "JavaScript" },
  { icon: "./assets/icons/typescript.svg", label: "TypeScript" },
  { icon: "./assets/icons/react.svg", label: "React" },
  { icon: "./assets/icons/angular.svg", label: "Angular" },
  { icon: "./assets/icons/node.svg", label: "Node.js" },
  { icon: "./assets/icons/express.png", label: "Express.js" },
  { icon: "./assets/icons/mongodb.svg", label: "MongoDB" },
  { icon: "./assets/icons/git.svg", label: "Git" },
  { icon: "./assets/icons/html.svg", label: "HTML5" },
  { icon: "./assets/icons/css.svg", label: "CSS3" },
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
          <p className="description-text divEl mb-3">
            Computing has held a life-long fascination for me &mdash; from
            building my first computer to wondering how a compilation of
            simple ideas and components can interact to produce something as
            complex and adaptable as a finished piece of software. That
            curiosity, paired with a genuine love for well-designed,
            interactive experiences, is what drove me to make coding my
            career.
          </p>
          <p className="description-text divEl mb-3">
            I started with the UNC-Chapel Hill Full Stack Web Development
            Boot Camp, then spent over two years as a Software Engineer at
            Quantworks, Inc., before moving to my current role as a Senior
            Software Engineer at Sizeo, where I work across the stack
            building and maintaining software infrastructure.
          </p>
          <p className="description-text divEl mb-3">
            More recently, I&apos;ve been expanding into AI and data science,
            completing the Data Scientist and Artificial Intelligence
            Associate credentials through NC State University&apos;s AI
            Academy &mdash; and I&apos;m actively looking to bring that
            knowledge into practical, production-grade software.
          </p>
          <p className="description-text divEl mb-3">
            I bring an unconventional path into tech: an MD with a background
            in abdominal surgery, and years managing high-volume restaurant
            operations in Dubai and at RDU airport. That combination gives me
            a strong foundation in problem-solving under pressure, working
            cross-functionally, and staying focused on the end result.
          </p>
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
      <div className="container skills-grid mt-5">
        {skills.map(skill => (
          <div className="skill-item text-center" key={skill.label}>
            <div className="skill-chip shadow-separation">
              {skill.icon && (
                <img src={skill.icon} alt={skill.label} />
              )}
              {skill.fa && <i className={`fa ${skill.fa}`}></i>}
              {skill.badge && <span>{skill.badge}</span>}
            </div>
            <p className="py-2">{skill.label}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AboutMe;
