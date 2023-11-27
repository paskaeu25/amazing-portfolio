import './Home.css';
import HeaderImage from '../../assets/pavelas-bulatovas.jpg';

// Fontawesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// React Dom Link
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <header>
      <div className="container container-lg header-container">
        <img src={HeaderImage} alt="Pavela Bulatovas" />
        <div className="header-right">
          <h1>
            <span>Hi, I'm Pavelas Bulatovas</span>
            <br />
            Full Stack Web Developer
          </h1>
          <p>
            I decided to start my professional career in IT by learning Business
            Analysis by myself. As a result of that, I had the opportunity to
            work as an IT and Business Analyst for 3 years, where I discovered
            my passion to materialize my and every customer's ideas. Being
            always passionate about software engineering, I decided to
            transition to web development to start a new phase, taking advantage
            of all my business analysis experience to provide effective
            solutions to complex problems. When I'm not coding. you can find me
            working out, cycling, walking outside or spending time with my
            friends.
          </p>
          <Link className="btn" to={'/about'}>
            About Me
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
