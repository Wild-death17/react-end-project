import Router from "../route/route";
import { CartProvider } from "../contexts/cartContext";

export default function Main() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
}
