/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react/macro';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetAllTodosQuery } from './todoSlice';

const wrapperCSS = css({
  padding: '2rem 0 0',
  margin: '0 auto',
  textAlign: 'center',
});

const Wrapper = ({ children, className }: { children: any; className?: string }) => (
  <div css={wrapperCSS} className={className}>
    {children}
  </div>
);

const Todo = () => {
  const { data, isSuccess, isLoading, isError, error } = useGetAllTodosQuery();

  let renderedContent;

  if (isLoading) {
    renderedContent = (
      <Wrapper>
        <CircularProgress />
      </Wrapper>
    );
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

  return <Wrapper>{renderedContent}</Wrapper>;
};

export default Todo;
