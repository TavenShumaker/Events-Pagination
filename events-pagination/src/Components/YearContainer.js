import axios from 'axios';
import { useState, useEffect } from 'react';
import EventsContainer from './EventsContainer.js'
import styled from 'styled-components';

const YearWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  background-color: #ff9900;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  font-weight: bold;
  height: 50px;
  width: 200px;
  margin-top: 20px;
  margin-bottom: 100px;
`;

const YearContainer = ({year}) => {

  const [loading, setLoading] = useState(true);
  const [eventsArr, setEventsArr] = useState([]);
  const [numberDisplayed, setNumberDisplayed] = useState(5);

  const incrementDisplayed = () => {
    setNumberDisplayed(numberDisplayed + 5);
  };

  useEffect(() => {

    const url = `https://ocd.datamade.us/events/?jurisdiction__name=Los%20Angeles%20County%20Metropolitan%20Transportation%20Authority&start_date__startswith=${year}&sort=-start_date`

    const fetchFunc = async () => {
      const response = await axios(url);
      setLoading(false);
      setEventsArr(response.data.results);
    };

    fetchFunc();

  }, []);

  return(
    <YearWrapper>
      <h1 style={{color: '#fff', marginBottom: '120px'}}>{year} Events</h1>
      {(loading || !eventsArr[0]) ? <h3>Loading...</h3> : 
      <EventsContainer
        data-testid="EventsContainer"
        eventsArr={eventsArr}
        numberDisplayed={numberDisplayed}
      />}
      <Button onClick={incrementDisplayed}>Show More Events</Button>
    </YearWrapper>
  );
};

export default YearContainer;