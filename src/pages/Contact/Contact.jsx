import './Contact.css';

// Components import
import HeadingText from '../../components/HeadingText/HeadingText';

// FontAwesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <>
      <section>
        <HeadingText title={'Contact'} titlePrimary={'Me'} />;
        <div className="container contact-container">
          <form action="#">
            <input type="text" required placeholder="Your Name" />
            <input type="email" required placeholder="Your Email" />
            <input type="tel" required placeholder="Your  Number" />
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Your Message"
            ></textarea>
            <button className="btn" type="submit">
              Send
              <span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </button>
          </form>
        </div>
      </section>
      <footer>
        <p>&copy; Pavelas Bulatovas 2023. All rights reserved.</p>
      </footer>
    </>
  );
}
