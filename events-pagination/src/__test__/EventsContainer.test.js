import React from 'react';
import {render} from '@testing-library/react';
import { sampleData } from './EP-testingUtils';
import EventsContainer from '../Components/EventsContainer';

test('snapshot', () => {
  const {container} = render(<EventsContainer numberDisplayed={3} eventsArr={sampleData}/>);
  expect(container.firstChild).toMatchSnapshot();
});

test('Renders the correct number of cards', () => {
  const { container } = render(<EventsContainer numberDisplayed={3} eventsArr={sampleData}/>);
  expect(container.firstChild.childNodes.length).toBe(3);
});