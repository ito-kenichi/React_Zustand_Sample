import useStore from '../store';

const Reset = () => {
  const reset = useStore((state) => state.reset);
  return (
    <div>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default Reset;