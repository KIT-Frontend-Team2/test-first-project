import { useState } from "react";

function discountPromotion() {
  const [isTrue, setIsTrue] = useState(true);
  return [isTrue, setIsTrue];
}

export default discountPromotion;
