import { useState } from 'react';

const useCountUpShipping = () => {
  const [count, setCount] = useState(0);
  return [count, setCount];
}; // 주석 완료

export default useCountUpShipping