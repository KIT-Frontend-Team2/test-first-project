import { useState } from 'react';

export default function useCheckProductPrice() {
  const [isTrue, setIsTrue] = useState(false);
  return [isTrue, setIsTrue];
}
