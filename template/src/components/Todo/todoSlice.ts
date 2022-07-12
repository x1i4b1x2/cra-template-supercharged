import apiSlice from '../../api/apiSlice';

export interface Todo {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

export type Todos = Todo[];

export const todosSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo, void>({
      query: () => '/todos',
      providesTags: () => [],
    }),
  }),
});

export const { useGetAllTodosQuery } = todosSlice;
