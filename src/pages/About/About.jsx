import './About.css';

// FontAwesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

// CV import
import CV from '../../assets/CV.pdf';

// Component import
import HeadingText from '../../components/HeadingText/HeadingText';
import Card from '../../UI/Card';
import Tools from '../../components/Tools/Tools';
import Services from '../../components/Services/Services';

// Experience Data Import
import { experience } from '../../data/Data';

export default function About() {
  return (
    <>
      <section className="About">
        <HeadingText title={'About'} titlePrimary={'Me'} />

        <div className="container about-container">
          <div className="about-left">
            <h3>Hi, I'm Pavelas Bulatovas</h3>
            <p>
              I decided to start my professional career in IT by learning
              Business Analysis by myself. As a result of that, I had the
              opportunity to work as an IT and Business Analyst for 3 years,
              where I discovered my passion to materialize my and every
              customer's ideas. Being always passionate about software
              engineering, I decided to transition to web development to start a
              new phase, taking advantage of all my business analysis experience
              to provide effective solutions to complex problems. When I'm not
              coding. you can find me working out, cycling, walking outside or
              spending time with my friends.
            </p>
            <p>
              When I'm not coding. you can find me working out, cycling, walking
              outside or spending time with my friends.
            </p>
            <a href={CV} className="btn" download>
              Download CV
              <span>
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </a>
          </div>

          <div className="about-right">
            {experience.map(({ id, no, title }) => {
              return (
                <Card key={id} classname={'experience-card'}>
                  <h1>
                    <span>{no}</span>
                  </h1>
                  <p>{title}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Tools />
      <Services />
    </>
  );
}
