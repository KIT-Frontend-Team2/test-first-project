import { useState } from 'react';

export default checkProductPrice = () => {
  const [isTrue, setIsTrue] = useState(false);
  return [isTrue, setIsTrue];
};
