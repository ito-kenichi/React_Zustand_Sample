import { create } from 'zustand';
// import  { API, graphqlOperation } from '@aws-amplify/api';
// import { listTodos } from './graphql/queries';
// import { createTodo } from './graphql/mutations';
// import { onCreateTodo } from './graphql/subscriptions';

const useStore = create((set, get) => ({

  count: 1,
  list: [],
  increase: () => set({ count: get().count + 1 }),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  
  users: [],
  deleteUser: (id) =>
    set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
}));

export default useStore;
