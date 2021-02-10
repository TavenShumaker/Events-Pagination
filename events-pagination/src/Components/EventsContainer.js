import EventCard from './EventCard.js';
import styled from 'styled-components';

const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 5% auto;
  align-items: center;
`;

const EventsContainer = ({eventsArr, numberDisplayed}) => {
  const cards = [];

  for(let i = 0; i < numberDisplayed && i < eventsArr.length; i++){
    cards.push(<EventCard key={i} index={i} event={eventsArr[i]}/>);
  }

  return(
    <EventsWrapper>
      {cards}
    </EventsWrapper>
  );
};

export default EventsContainer;