import { useState } from "react";

export default function discountPromotion() {
  const [isTrue, setIsTrue] = useState(true);
  return [isTrue, setIsTrue];
}
