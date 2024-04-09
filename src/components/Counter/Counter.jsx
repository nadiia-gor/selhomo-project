import { useEffect, useState } from "react";

const Counter = ({ targetValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < targetValue) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [count, targetValue]);

  return <h4>{count}</h4>;
};

export default Counter;
