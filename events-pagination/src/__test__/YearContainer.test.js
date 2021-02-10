import React from 'react';
import { render } from '@testing-library/react';
import YearContainer from '../Components/YearContainer';

test('snapshot', () => {
  const { container } = render(<YearContainer year={2020}/>);
  expect(container.firstChild).toMatchSnapshot();
});

//renders title
it('renders title', () => {
  const { container } = render(<YearContainer year={2020}/>);
  expect(container.textContent).toMatch('2020 Events');
});
//renders button

//renders loading
it('renders loading', async () => {
  const { container } = render(<YearContainer year={2020}/>);
  expect(container.textContent).toMatch('Loading...');
});

//renders button and on clicking button changes state variable
it('has more items button', () => {
  const { container, getByRole } = render(<YearContainer year={2020}/>);
  const button = getByRole('button');
  expect(button.textContent).toMatch('Show More Events');
});