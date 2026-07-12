import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const experience = [
  {
    title: "Software Engineer",
    company: "Sizeo",
    dates: "Mar 2024 – Present",
    location: "Durham, NC (Hybrid)",
    bullets: [
      "Serve as a full-stack engineer across a retail optimization platform, owning both backend services and frontend features.",
      "Built the complete front-end for an internal performance analytics dashboard, delivered ahead of schedule.",
      "Resolved dependency and code-scanning vulnerabilities across Node.js and Python/serverless codebases to support SOC 2 compliance.",
      "Built and continuously improved internal deployment tooling, speeding up and increasing the accuracy of client deployment preparation.",
      "Developed an LLM-powered analytics assistant using the Anthropic Claude API with agentic tool-calling.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Quantworks, Inc.",
    dates: "Nov 2021 – Mar 2024",
    location: "Chapel Hill, NC (Hybrid)",
    bullets: [
      "Developed a web application with advanced data-grid components for retail size and inventory management, deployed on cloud infrastructure.",
      "Built and maintained a secure communication platform with segregated access controls, spanning backend APIs, a web portal, and a mobile client.",
      "Contributed to a workflow orchestration pipeline coordinating optimization jobs across microservices.",
    ],
  },
];

const Work = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".right-animation").forEach(elem => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: elem,
          },
        })
        .from(elem, { opacity: 0, duration: 1, x: -250 });
    });

    gsap.utils.toArray(".left-animation").forEach(elem => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: elem,
          },
        })
        .from(elem, { opacity: 0, duration: 1, x: 250 });
    });
  });

  const styles = {
    textFontSize: {
      fontSize: "24px",
      paddingRight: "5px",
    },
  };

  return (
    <main className="container m-5 mx-auto">
      <div className="container">
        <h1 className="mb-4">Professional Experience</h1>

        {experience.map((job, i) => (
          <div
            className={`card bg-dark my-4 p-4 ${
              i % 2 === 0 ? "right-animation" : "left-animation"
            }`}
            key={job.company}
          >
            <div className="d-flex justify-content-between flex-wrap">
              <h4 className="mb-0">
                {job.title} &middot; {job.company}
              </h4>
              <span className="text-muted">{job.dates}</span>
            </div>
            <p className="text-muted mb-3">{job.location}</p>
            <ul>
              {job.bullets.map(bullet => (
                <li key={bullet.slice(0, 20)}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        <h1 className="mt-5 mb-4">Personal Projects</h1>

        <div className="card bg-dark my-5 p-3 right-animation">
          <div className="row container">
            <div className="col-lg-6 col-md-12">
              <img
                width="100%"
                src="./assets/project-pics/codeSocial.png"
                alt=""
              />
              <img
                width="100%"
                src="./assets/project-pics/codeSocial2.png"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <h4>CodeSocial</h4>
              <p>
                A full stack social network application for coders who are
                new to the industry and looking for work and information
                about companies and the interview process.
              </p>
              <h5>Technologies:</h5>
              <ol>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Handlebars.js</li>
                <li>MySQL / Sequelize.js</li>
              </ol>
              <div>
                <a
                  href="https://github.com/Muiasar-Al-Ani/CodeSocial"
                  target="_blank"
                  className="waves-effect waves-light btn grey darken-2"
                  rel="noreferrer"
                >
                  <i className="fa fa-github" style={styles.textFontSize}></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-dark my-5 p-3 left-animation">
          <div className="row container">
            <div className="col-lg-6 col-md-12">
              <h4>Trailr</h4>
              <p>
                A front-end web application for searching movies. Users can
                search by title and view information such as IMDB rating,
                trailer, runtime, and streaming availability.
              </p>
              <h5>Technologies:</h5>
              <ol>
                <li>JavaScript</li>
                <li>HTML / CSS</li>
                <li>OMDB API, TMDB API</li>
                <li>YouTube Data API v3</li>
              </ol>
              <div>
                <a
                  href="https://github.com/Muiasar-Al-Ani/Trailr"
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  <i className="fa fa-github" style={styles.textFontSize}></i>
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <img
                width="100%"
                className="pt-3"
                src="./assets/project-pics/trailr.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Work;
