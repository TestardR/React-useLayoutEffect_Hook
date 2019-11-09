import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { useForm } from './useForm';
import Hello from './Hello';
import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';

function App() {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });
  const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);
  const hello = useRef(() => console.log('hello'));
  const inputRef = useRef();

  // To get measurement of a DOM node
  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

  const [rect, inputRef2] = useMeasure();

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowHello(!showHello);
        }}>
        Toggle
      </button>
      {showHello && <Hello></Hello>}
      <input
        ref={inputRef}
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <input
        ref={inputRef2}
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}>
        REF
      </button>
    </div>
  );
}

export default App;
