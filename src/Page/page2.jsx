import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CounterContext } from '../context/counterContext';
const page2 = () => {
  const { data, setData } = useContext(CounterContext);

  return (
    <div>
      <h1>Second page</h1>
      <br />
      <br />
      <Link to="/">First Page</Link>
      <br />
      <br />
      <p>{data.count}</p>
      <p>{data.input}</p>
    </div>
  );
};

export default page2;
