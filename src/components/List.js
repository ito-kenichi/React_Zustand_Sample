import useStore from '../store';

const List = () => {
    
    const list = useStore((state) => state.list);
    
    return <div>{
        list.length > 0 ? 
          list.map((todo) => <p key={todo.id}>{todo.name} ({todo.createdAt})</p>) : <p>Add some todos!</p>
    }</div>;
};

export default List;