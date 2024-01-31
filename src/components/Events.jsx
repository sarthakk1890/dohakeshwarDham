import '../styles/events.scss'
import EventCard from './EventCard'

const eventNames = [
  "दंगल | Dangal",
  "वालीबाल | Volleyball",
  "कबड्डी | Kabaddi",
  "मिनी मैराथन | Mini Marathon",
  "मेहंदी स्पर्धा | Mehndi competition"
]

const imageNames = [];
for (let i = 0; i < 5; i++) {
  const image = `event/event (${i + 1}).jpg`
  imageNames.push(image)
}

const Events = () => {
  return (
    <div className='events'>

      <div className='event-heading'>
        <h2>आयोजन | Events</h2>
      </div>

      <div>
        {
          eventNames.map((value, idx) => (
            <EventCard key={idx} eventImage={imageNames[idx]} eventName={value} />
          ))
        }
      </div>

    </div>
  )
}

export default Events