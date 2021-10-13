import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AboutMe = () => {
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
      <div className="container row home-main mx-auto mt-5">
        <div className="col-lg-6 col-md-12">
          <h1 className="job-text my-5 divEl">
            <span>About Me</span>
          </h1>
          <h6 className="description-text divEl">
            Computing has held a life-long fascination for me. What started as
            an interest in building my first computer developed into a growing
            desire to understand how a compilation of simple ideas and
            components can interact to produce a complex and adaptable entity. I
            have always found Video games and interactive websites enticing.
            When I browse a skilfully designed website, it peaks my curiosity
            and I want to understand how the engineers wrote such a flawless
            code. This fascination is what drove my decision to join the UNC
            Chapel Hill Coding Bootcamp to make coding my career as a web
            developer. I'm a team player, who love's JavaScript Debugging, and
            Building Dynamic interactive websites.
          </h6>
          <br />
          <a href="./contact-me.html" className="divEl">
            Contact Me {">"}
          </a>
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
        <div className="col-lg-1 col-md-2 col-sm-3 text-center ">
          <img
            src="./assets/icons/html.svg"
            className="shadow-separation"
            width="50px"
            alt="HTML5"
          />
          <p className="py-2">HTML5</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/html.svg"
            className="shadow-separation"
            width="50px"
            alt="CSS3"
          />
          <p className="py-2">CSS3</p>
        </div>
        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/js.svg"
            className="shadow-separation"
            width="50px"
            alt="JavaScript"
          />
          <p className="py-2">JavaScript</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/react.svg"
            className="shadow-separation"
            width="50px"
            alt="React"
          />
          <p className="py-2">React</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/jquery.svg"
            className="shadow-separation"
            width="50px"
            alt="jQuery"
          />
          <p className="py-2">jQuery</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/node.svg"
            className="shadow-separation"
            width="50px"
            alt="Node.js"
          />
          <p className="py-2">Node.js</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/express.png"
            className="shadow-separation"
            width="50px"
            alt="Express.js"
          />
          <p className="py-2">Express.js</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/sql.svg"
            className="shadow-separation"
            width="50px"
            alt="SQL"
          />
          <p className="py-2">SQL</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/mysql.svg"
            className="shadow-separation"
            width="50px"
            alt="My Sql"
          />
          <p className="py-2">My Sql</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/git.svg"
            className="shadow-separation"
            width="50px"
            alt="Git"
          />
          <p className="py-2">Git</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/mongodb.svg"
            className="shadow-separation"
            height="50px"
            alt="MongoDB"
          />
          <p className="py-2">MongoDB</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/bootstrap.svg"
            className="shadow-separation"
            width="50px"
            alt="BootStrap"
          />
          <p className="py-2">BootStrap</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/Materialize.svg"
            className="shadow-separation"
            width="50px"
            alt="Materialize"
          />
          <p className="py-2">Materialize</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center">
          <img
            src="./assets/icons/vue.svg"
            className="shadow-separation"
            width="50px"
            alt="Vue.js"
          />
          <p className="py-2">Vue.js</p>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-3 text-center ">
          <img
            src="./assets/icons/php.svg"
            className="shadow-separation"
            width="50px"
            alt="PHP"
          />
          <p className="py-2 ">PHP</p>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
