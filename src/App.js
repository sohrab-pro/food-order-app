import { useReducer } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const cartReducer = (state, action) => {
	if (action.type === "SHOW") {
		return { show: true };
	} else if (action.type === "HIDE") {
		return { show: false };
	}
	return state;
};

function App() {
	const [cartShown, cartShownDispatch] = useReducer(cartReducer, {
		show: false,
	});

	const showCartHandler = () => {
		cartShownDispatch({ type: "SHOW" });
	};

	const hideCartHandler = () => {
		cartShownDispatch({ type: "HIDE" });
	};

	return (
		<CartProvider>
			{cartShown.show && <Cart onClose={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
