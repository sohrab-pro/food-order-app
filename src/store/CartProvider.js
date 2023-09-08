import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedItems = [...state.items, action.item];
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		return { items: updatedItems, totalAmount: updatedTotalAmount };
	}
	return state;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCartHandler = (item) => {
		console.log("item: ", item);
		dispatchCartAction({ type: "ADD", item: item });
	};

	const removeItemFromCartHandler = (id) => {
		// Implement the logic for "REMOVE" action if needed.
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
