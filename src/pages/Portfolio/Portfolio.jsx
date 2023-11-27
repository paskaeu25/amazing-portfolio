import './Portfolio.css';

// Components import
import Card from '../../UI/Card';
import HeadingText from '../../components/HeadingText/HeadingText';
import Testimonials from '../../components/Testimonials/Testimonials';

// Fontawesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// Data import
import { portfolio } from '../../data/Data';

export default function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <HeadingText title={'Resent'} titlePrimary={'Work'} />
        <div className="container portfolio-container">
          {portfolio.map(({ id, img, name, des, github, live }, index) => {
            const isLastItem = index === portfolio.length - 1;
            return (
              <Card classname="project" key={id}>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{des}</p>
                <div className="links">
                  {github && !isLastItem && (
                    <a
                      className="btn btn-secondary"
                      target="_blank"
                      href={github}
                    >
                      Github
                      <span>
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                    </a>
                  )}
                  <a className="btn btn-secondary" target="_blank" href={live}>
                    Demo
                    <span>
                      <FontAwesomeIcon icon={faPlay} />
                    </span>
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
      <Testimonials />
    </>
  );
}
