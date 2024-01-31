import PropTypes from 'prop-types';
import '../styles/eventCard.scss';

const EventCard = ({ eventImage, eventName }) => {
  return (
    <div className="eventCard">
      <img src={eventImage} alt="" />
      <span>{eventName}</span>
    </div>
  );
};

EventCard.propTypes = {
  eventImage: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
};

export default EventCard;
