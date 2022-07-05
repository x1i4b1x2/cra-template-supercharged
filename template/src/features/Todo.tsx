import React from 'react';
import { useGetAllTodosQuery } from './todoSlice';

const Todo = () => {
  const { data, isSuccess, isLoading, isError, error } = useGetAllTodosQuery();

  let renderedContent;

  if (isLoading) {
    renderedContent = <h1>Loading...</h1>;
  }

  if (isError) {
    renderedContent = (
      <>
        <h2>{`Install JSON Server with "npm install -g json-server" and start it with "npm run server:js" or "npm run server:json".`}</h2>
        <p>Error: {JSON.stringify(error)}</p>
      </>
    );
  }

  if (isSuccess) {
    renderedContent = (
      <>
        <h2>Response from JSON Server:</h2>
        <p>{JSON.stringify(data)}</p>
      </>
    );
  }

  return <div className="todos">{renderedContent}</div>;
};

export default Todo;
