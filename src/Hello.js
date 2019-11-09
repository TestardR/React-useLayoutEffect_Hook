import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';

const Hello = () => {
  /* const renders = useRef(0);
  console.log('hello renders: ', renders.current++); */
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  const [rect, divRef] = useMeasure(data);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div ref={divRef}>{loading ? 'loading...' : data}</div>
      </div>
      <pre className="">{JSON.stringify(rect, null, 2)}</pre>
      <button
        onClick={() => {
          setCount(currentCount => currentCount + 1);
        }}>
        Count
      </button>
    </div>
  );
};

export default Hello;
