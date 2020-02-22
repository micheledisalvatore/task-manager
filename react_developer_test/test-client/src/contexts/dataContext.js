import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import PropType from 'prop-types';
import useFetch from '../hooks/useFetch';

const dataContext = createContext({});

export default dataContext;

export const DataProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(null);
  const { data: usersData = [], loading: usersLoading, error: usersError } = useFetch('https://jsonplaceholder.typicode.com/users');
  const { data: todosData, loading: todosLoading, error: todosError } = useFetch('https://jsonplaceholder.typicode.com/todos');
  const loading = useMemo(() => usersLoading || todosLoading, [usersLoading, todosLoading]);

  useEffect(() => setError(todosError || usersError), [todosError, usersError]);

  const user = useMemo(() => {
    if (usersData && userName.length) {
      const foundUser = usersData.find(({ username }) => username === userName);

      if (foundUser) {
        return foundUser;
      }

      setError('User not found');
    }

    return {};
  }, [usersData, userName]);

  const tasks = useMemo(() => {
    if (todosData && user) {
      const { id: userId } = user;

      const foundTodos = todosData.filter((task) => task.userId === userId);

      if (foundTodos) {
        return foundTodos;
      }

      setError('Todos not found');
    }

    return [];
  }, [user, todosData]);

  const value = {
    onUserNameChange: setUserName,
    user,
    tasks,
    loading,
    error,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropType.node.isRequired,
};
