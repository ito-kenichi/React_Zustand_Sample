// import { useEffect } from 'react';
import useStore from './store';
import Count from './components/Count';
import List from './components/List';
import { shallow } from 'zustand/shallow';
import Timer from './timer'

function App() {
  // const getUsers = useStore((state) => state.getUsers);
  // const getList = useStore((state) => state.getList);
  const deleteUser = useStore((state) => state.deleteUser);
  const users = useStore((state) => state.users);
  
  console.log('再描写');
  const { increase, decrease, addTodo } = useStore(
    (state) => ({
      increase: state.increase,
      decrease: state.decrease,
      addTodo: state.addTodo,
    }),
    shallow
  );

  // useEffect(() => {
  //   getUsers();
  //   getList();
  // }, [getUsers, getList]);

  return (
    <div style={{ textAlign: 'center', margin: '1em' }}>
      <h1>User</h1>
      {users.map((user) => (
        <div key={user.id}>
          {user.name}
          <span onClick={() => deleteUser(user.id)}>X</span>
        </div>
      ))}
      <div>
        <h1>Count</h1>
        <Count />
        <div>
          <button onClick={() => increase()}>+</button>
          <button onClick={() => decrease()}>-</button>
        </div>
      </div>
      <div>
        <Timer />
      </div>
      <div>
        <button onClick={() => addTodo()}>Add Todo</button>
        <List />
      </div>
    </div>
  );
}

export default App;