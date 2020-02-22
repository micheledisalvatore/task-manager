import React from 'react';
import { render, screen } from '@testing-library/react';
import TasksListItem from '../TasksList';
import dataContext from '../../../contexts/dataContext';
import '@testing-library/jest-dom';

jest.mock('../Tick', () => jest.fn(({ className }) => (
  <div
    data-testid="tick"
    className={className}
  />
)));

test('renders the basic component', () => {
  const { container } = render(
    <dataContext.Provider
      value={{
        tasks: [],
      }}
    >
      <TasksListItem />
    </dataContext.Provider>
  );
  expect(container).toMatchSnapshot();

  expect(screen.queryByTestId('list')).toBeEmpty();
});

test('renders the component with 2 tasks', () => {
  const { container } = render(
    <dataContext.Provider
      value={{
        tasks: [
          { id: 0, title: 'Foo title', completed: false },
          { id: 1, title: 'Bar title', completed: true },
        ],
      }}
    >
      <TasksListItem />
    </dataContext.Provider>
  );

  expect(container).toMatchSnapshot();

  expect(screen.queryByTestId('list')).not.toBeEmpty();

  const items = screen.getAllByTestId('item');
  expect(items[0]).toBeInTheDocument();

  const ticks = screen.getAllByTestId('tick');
  expect(ticks[0]).not.toHaveClass('TasksList__Item__Tick--visible');
  expect(ticks[1]).toHaveClass('TasksList__Item__Tick--visible');
});
