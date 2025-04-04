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
          I'm a software engineer and sound designer with background in film,
          games and music. After 5+ years of solving complex challenges and
          creating projects for film and music, I decided to pursue my passion
          for technology.
          <p className="about__subtitle--1">
            My passion for music started when I was little. Sundays at home were
            all about my dad playing vinyl records—jazz, funk, you name it. One
            day, after hearing jazz for the first time, I was hooked. My dad
            noticed and gifted me my first instrument: an alto saxophone. That
            saxophone became my best friend growing up. I went to classical
            music school as a kid, and later, I joined the Jazz School in
            Xalapa, Mexico. Music was my world. Then life happened—big moves,
            big changes. I moved to Vancouver, BC, where I became a musician
            (living the dream!), and then to Montreal, QC, where I studied sound
            design for film and video games. That’s when things really took off.
            After finishing my studies, I got the chance to work with a
            well-known director in Montreal as a project development manager. It
            was an incredible experience that even took me to Cannes Film
            Festival in France! Honestly, it felt surreal.
          </p>
          <p className="about__subtitle--1">
            But even with all these amazing moments in my career, something
            still felt like it was missing. I’ve always been fascinated by
            technology—how it works, how it can transform ideas—and I knew I
            wanted to explore that side of myself. So, I took the leap and
            joined a 12-week coding bootcamp. It was intense but so worth it! I
            learned front-end and back-end development and started creating
            software solutions that feel as intuitive as they are impactful..
            Since then, I’ve participated in three hackathons, including one
            with Meta. At Meta’s hackathon, I led a team to create the "Meta AI
            Button," an educational tool that helps people explore AI’s
            potential in their personal and professional lives.{" "}
          </p>
          <p className="about__subtitle--1">
            Right now, I'm working on my own app called "Vinil-o" (although the
            name might change—I’m still figuring that part out). It’s a passion
            project inspired by my love for music and technology, and I’m taking
            my time to build something truly special. My goal is to launch it
            around 2026 or 2027.
          </p>
          <p className="about__subtitle--1">
            On top of that, I'm freelancing for a university in Québec on a VR
            game designed for nurse practitioners. It’s such a cool
            project—combining fun with education—and it’s exciting to see how VR
            can make learning more immersive. Looking back at everything so far,
            my life has been one big adventure—and honestly? I'm just getting
            started. Whether it's music, film, or tech, I'm all about diving
            into new challenges and creating things that connect with people.
            And wherever fun and adventure call? You can bet I'll be there!
          </p>
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
