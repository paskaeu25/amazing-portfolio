import './Services.css';

// FontAwesome icon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components import
import HeadingText from '../HeadingText/HeadingText';
import Card from '../../UI/Card';

// Data import
import { services } from '../../data/Data';

export default function Services() {
  return (
    <section className="services">
      <HeadingText title={'What I'} titlePrimary={'Offer'} />
      <div className="container services-container">
        {services.map(({ id, icon, name, des }) => {
          return (
            <Card key={id} classname={'services-card'}>
              <span>
                <FontAwesomeIcon icon={icon} />
              </span>
              <h3>{name}</h3>
              <p>{des}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
