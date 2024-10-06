import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CounterContext } from '../context/counterContext';
const page1 = () => {
  const { data, setData } = useContext(CounterContext);
  const onChange = e => {
    setData({ ...data, input: e.target.value });
  };
  return (
    <div>
      <h1>First page</h1>
      <br />
      <br />
      <Link to="/second">Second Page</Link>
      <br />
      <br />
      <button onClick={() => setData({ ...data, count: data.count + 1 })}>
        Add 1
      </button>

      <input type="text" onChange={onChange} value={data.input} />
    </div>
  );
};

export default page1;
