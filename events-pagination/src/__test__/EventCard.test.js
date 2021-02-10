import React from 'react';
import {render} from '@testing-library/react';
import EventCard from '../EventCard';

const event = {
  id: "ocd-event/cc66cc1d-a825-4ad9-8e27-a73f4be8c9af",
  status: "passed",
  start_date: "2019-12-05T18:00:00+00:00",
  name: "Crenshaw Project Corporation"
}

test('snapshot', () => {
  const { container } = render(<EventCard index={0} event={event}/>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders event info', () => {
  const { container, getByText } = render(<EventCard index={0} event={event}/>);

  const d = new Date(event.start_date);
  const date = d.toLocaleDateString('en-US');
  let time = d.toLocaleTimeString('en-us',{timeZoneName:'short', hour:'2-digit', minute:'2-digit'});

  const link = getByText("Go to Event Details");

  expect(container.textContent).toMatch(event.name);
  expect(container.textContent).toMatch(event.status.toUpperCase());
  expect(container.textContent).toMatch(date);
  expect(container.textContent).toMatch(time);
  expect(link.href).toMatch('https://ocd.datamade.us/' + event.id);

});