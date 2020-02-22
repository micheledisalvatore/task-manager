import React, { useContext } from 'react';
import dataContext from '../../contexts/dataContext';

import Tick from './Tick';

import './TasksList.scss';

const TasksList = () => {
  const { tasks } = useContext(dataContext);

  return (
    <ul
      className="TasksList"
      data-testid="list"
    >
      {tasks.map(({ id, title, completed }) => (
        <li
          key={id}
          className="TasksList__Item"
          data-testid="item"
        >
          <Tick
            className={`TasksList__Item__Tick ${completed ? 'TasksList__Item__Tick--visible' : ''}`}
          />
          {title}
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
