import { useState } from 'react';

export default countUpShipping = () => {
  const [count, setCount] = useState(0);
  return [count, setCount];
};
