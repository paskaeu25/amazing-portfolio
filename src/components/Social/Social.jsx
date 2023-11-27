import './Social.css';

// Fontawesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Social() {
  return (
    <>
      <ul className="social">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pavelas-bulatovas/"
          >
            <span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/paskaeu25">
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
        </li>
        <li>
          <a target="_blank" href="mailto:bulatovp9@gmail.com">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </a>
        </li>
      </ul>
    </>
  );
}
