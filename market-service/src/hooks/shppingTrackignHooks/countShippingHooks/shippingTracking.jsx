import { useState } from 'react';

export default useCountUpShipping = () => {
  const [count, setCount] = useState(0);
  return [count, setCount];
};
