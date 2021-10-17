import React, { useEffect } from "react";
import { gsap } from "gsap";

const Home = ({ handlePageChange }) => {
  useEffect(() => {
    gsap.from(".divEl", { opacity: 0, duration: 1, y: -50, stagger: 0.6 });
    gsap.from(".my-image", { opacity: 0, duration: 2, x: -50, stagger: 0.6 });
  });

  return (
    <main className="container row home-main mx-auto mt-lg-5">
      <div className="col-lg-6 col-md-12">
        <h5 className="name-text my-lg-5 pt-lg-5 divEl">
          <span>Hi, I'm Muiasar.</span>
        </h5>
        <h1 className="job-text my-5 divEl">
          <span>Full Stack Web Developer</span>
        </h1>
        <h6 className="description-text divEl">
          <span>Graduate of the UNC Chapel Hill Coding Boot Camp.</span> <br />
          <span>
            Team Player, Love JavaScript Debugging, and Building Dynamic
            interactive websites.
          </span>
        </h6>
        <br />
        <div
          onClick={() => handlePageChange("AboutMe")}
          className="divEl devLink"
        >
          Learn More{">"}{" "}
        </div>
      </div>
      <img
        src="./assets/images/muiasar-photo.jpg"
        className="col-lg-6 col-md-12 my-image p-0"
        alt="Muiasar-Al-Ani"
      />
    </main>
  );
};

export default Home;
