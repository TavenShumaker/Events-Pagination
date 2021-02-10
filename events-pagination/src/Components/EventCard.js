import styled from 'styled-components';

const CardWrapper = styled.ul`
  border: 1px solid grey;
  width: 200px;
  height: 200px;
  align-self: ${props => props.cardRight ? "flex-end" : "flex-start"};
  margin-top: -15%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 10px;
  list-style-type: none;
  
`;

const Line = styled.hr`
  width: 80%;
`;

const EventCard = ({index, event}) => {

  const align = (index % 2 === 0) ? 'cardRight' : 'cardLeft';

  const formatDate = (string) => {
    const d = new Date(string);
    const date = d.toLocaleDateString('en-US');
    let time = d.toLocaleTimeString('en-us',{timeZoneName:'short', hour:'2-digit', minute:'2-digit'});
    if(time[0] === '0')time = time.slice(1);
    return date + ' ' + time;
  };

  const formattedDate = formatDate(event.start_date);
  
  if(align === 'cardRight') return(
    <CardWrapper cardRight>
      <li>{event.name}</li>
      <Line/>
      <li>{formattedDate}</li>
      <li>{event.status.toUpperCase()}</li>
      <li>
        <a href={'https://ocd.datamade.us/' + event.id}>Go to Event Details</a>
      </li>
    </CardWrapper>
  );
  else return(
    <CardWrapper>
      <li>{event.name}</li>
      <Line/>
      <li>{formattedDate}</li>
      <li>{event.status.toUpperCase()}</li>
      <li>
        <a href={'https://ocd.datamade.us/' + event.id}>Go to Event Details</a>
      </li>
    </CardWrapper>
  );
};

export default EventCard;