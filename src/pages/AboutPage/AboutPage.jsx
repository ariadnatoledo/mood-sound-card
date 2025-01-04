import "./AboutPage.scss";

function AboutPage() {
  return (
    <section className="about">
      <div className="about__container about__container--image">
        <h2 className="about__title">
          Hello <strong>!</strong>
        </h2>
      </div>

      <div className="about__container about__container--bio">
        <p className="about__subtitle">
          I'm a software engineer with a background in sound design and audio
          implementation. After 5+ years of solving complex challenges and
          creating projects for film, I decided to pursue my passion for
          technology.
          <p className="about__subtitle--1">
            Through a 12-week coding bootcamp, I gained expertise in front-end
            and back-end development and now focus on creating intuitive,
            impactful software solutions. Transitioning into the tech field has
            given me a unique blend of technical expertise and creative
            problem-solving.
          </p>
          <p className="about__subtitle--1">
            I participated in three Hackathons, including one with{" "}
            <strong>META</strong>. There, I led a team to develop the "Meta AI
            Button," an innovative educational tool designed to help users
            explore the potential of AI in personal and professional contexts.{" "}
          </p>
          <p className="about__subtitle--1">
            My goal is to build innovative solutions, foster collaboration, be
            an adaptable leader, and drive impactful results for your team.
          </p>
        </p>

        <p className="about__subtitle--1">
          Additionally, everything I create incorporates an audio experience to
          calm your mind and improve the overall user experience.
        </p>
      </div>

      <div className="about__container about__container--list">
        <h2 className="about__title">
          SKILLS + <strong>TOOLS</strong>
        </h2>
      </div>

      <div className="about__list-container">
        <ul className="about__list">
          <li className="about__item about__item--sm">
            <span className="about__marker">HTML</span>
            <span className="about__marker">CSS/Sass</span>
            <span className="about__marker">JavaScript</span>
            <span className="about__marker">React</span>
            <span className="about__marker">Node.js</span>
            <span className="about__marker">Express</span>
            <span className="about__marker">MySQL</span>
          </li>
          <li className="about__item about__item--sm">
            <span className="about__marker">Git</span>
            <span className="about__marker">GitHub</span>
            <span className="about__marker">Agile Development</span>
          </li>
          <li className="about__item about__item--med">
            <span className="about__marker">TypeScript</span>
            <span className="about__marker">Next.js</span>
            <span className="about__marker">Tailwand CSS</span>
          </li>

          <li className="about__item about__item--med">
            <span className="about__marker">Figma</span>
            <span className="about__marker">JIRA</span>
            <span className="about__marker">User Testing</span>
            <span className="about__marker">Wwise</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutPage;
