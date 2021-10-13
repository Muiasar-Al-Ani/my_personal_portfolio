import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
    },
  };

  return (
    <main className="container m-5 mx-auto">
      <div className="container">
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
                Code Social is a full stack social network application for
                coders who are new to the industry and looking for work and
                information about companies and the interview process. The site
                will allow users to post information in various categories
                (Company Info, Interview Advice, Practice Code for Interviews),
                comment on other users posts, update posts, delete posts, and
                upvote posts.
              </p>
              <h5>Technologies :</h5>
              <ol>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Handlebars.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Sequelize.js</li>
                <li>Mysql</li>
                <li>Mysql2 npm package</li>
                <li>Express-session</li>
                <li>Connect-session-sequelize</li>
                <li>Dotenv</li>
                <li>Husky</li>
                <li>Prettier</li>
                <li>Charts.js</li>
                <li>Bcrypt</li>
                <li>Adzuna API</li>
                <li>Heroku</li>
              </ol>
              <div>
                <a
                  href="https://secure-meadow-77946.herokuapp.com/"
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                  // eslint-disable-next-line react/style-prop-object
                >
                  <i className="fa fa-eye" style={styles.textFontSize}></i> Demo
                </a>
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
              <h4>Tech Blog</h4>
              <p>
                This is a full stack web application CMS-style sit similar to a
                Wordpress site. This app follows the MVC paradigm in its
                architectural structure, with the use of Handlebars.js as the
                templating engine with Sequelize for ORM and express-session
                package for authentication and the use of cookies to stay logged
                in.
              </p>
              <h5>Technologies :</h5>
              <ol>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Handlebars.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Sequelize.js</li>
                <li>Mysql</li>
                <li>Mysql2 npm package</li>
                <li>Express-session</li>
                <li>Connect-session-sequelize</li>
                <li>Dotenv</li>
                <li>Bcrypt</li>
                <li>Heroku</li>
              </ol>
              <div>
                <a
                  href="https://fathomless-citadel-98626.herokuapp.com/"
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  <i className="fa fa-eye" style={styles.textFontSize}></i> Demo
                </a>
                <a
                  href="https://github.com/Muiasar-Al-Ani/Tech-Blog"
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
                src="./assets/project-pics/techBlog.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="card bg-dark my-5 p-3 right-animation">
          <div className="row container">
            <div className="col-lg-6 col-md-12">
              <img
                width="100%"
                className="pt-3"
                src="./assets/project-pics/trailr.png"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <h4>Trailr</h4>
              <p>
                A Front-End web application for searching for movies. Users can
                search a movie by title, select which movie they're interested
                in, and view information about the movie such as its IMDB critic
                rating, trailer, runtime, if the movie is on Netflix to stream,
                and other related material.
              </p>
              <h5>Technologies :</h5>
              <ol>
                <li>Html</li>
                <li>CSS</li>
                <li>Materialize CSS Library</li>
                <li>JavaScript</li>
                <li>Open Movie Database (OMDb) API</li>
                <li>Google Youtube Data API v3</li>
                <li>Streaming-Availability API via RapidAPI</li>
                <li>The Movie Database (TMDB) API</li>
              </ol>
              <div>
                <a
                  href="https://muiasar-al-ani.github.io/Trailr/"
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  <i className="fa fa-eye" style={styles.textFontSize}></i> Demo
                </a>
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
          </div>
        </div>

        <div className="card bg-dark my-5 p-3 left-animation">
          <div className="row container">
            <div className="col-lg-6 col-md-12">
              <h4>Back-End Employee Tracker</h4>
              <p>
                This is a Back-End Employee Tracker that was created using a SQL
                database with MySQL, and used inquirer npm package to get the
                user input and manipulate the database based on that input. The
                User can add a new employee to the database, add new role, add
                new department, view all departments stored on the database,
                view all employees, view all Roles and more.
              </p>
              <h5>Technologies :</h5>
              <ol>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>MySQL</li>
                <li>MySQL2 npm package</li>
                <li>Promise-sql npm package</li>
                <li>Console.table npm package</li>
                <li>Inquirer npm package</li>
              </ol>
              <div>
                <a
                  href="https://github.com/Muiasar-Al-Ani/Back-End-Employee-Tracker"
                  target="_blank"
                  className="waves-effect waves-light btn grey darken-2"
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
                src="./assets/project-pics/EmployeeTracker.gif"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="card bg-dark my-5 p-3 right-animation">
          <div className="row container">
            <div className="col-lg-6 col-md-12">
              <img width="100%" src="./assets/project-pics/readme.gif" alt="" />
            </div>
            <div className="col-lg-6 col-md-12">
              <h4>Back-End README Generator</h4>
              <p>
                This is a Back-End application for generating a high quality
                README.md files and user will be prompt with questions about the
                info needed to be shown in the read me file and all the links
                and video needed. The user needs to run npm install command in
                the terminal to install the decencies needed for this
                application after that the user needs to run the command "node
                index.js" to run the app after that the user will be prompt and
                the content of the README.md file will be generated dynamically
                based on the user's answers.
              </p>
              <h5>Technologies :</h5>
              <ol>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>fs Node.js module</li>
                <li>inquirer npm package</li>
              </ol>
              <div>
                <a
                  href="https://github.com/Muiasar-Al-Ani/Backend-README-Generator"
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
              <h4>Back-End E-Commerce RESTful API</h4>
              <p>
                This is a Back-End base for an E-Commerce website, based on
                RESTful API that was created using the Sequelize promise-based
                Node.js ORM for MySql. Users can Create, Read, Update and Delete
                data from the database. There are four models built in the app
                Categories, Products, Tags, and ProductTags that have
                relationships such as one-to-many relationships and many-to-many
                relationships.
              </p>
              <h5>Technologies :</h5>
              <ol>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>MySQL</li>
                <li>Sequelize.js</li>
                <li>Mysql2 npm package</li>
                <li>Dotenv</li>
              </ol>
              <div>
                <a
                  href="https://github.com/Muiasar-Al-Ani/Back-End-E-Commerse-RESTful-API"
                  target="_blank"
                  className="waves-effect waves-light btn grey darken-2"
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
                src="./assets/project-pics/e-commerce.gif"
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
