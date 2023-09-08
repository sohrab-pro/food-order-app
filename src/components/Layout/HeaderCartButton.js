import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context.js";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const numberOfCartItems = cartCtx.items.reduce((resultNum, currentNumber) => {
		return resultNum + currentNumber.amount;
	}, 0);
	return (
		<button onClick={props.onShowCart} className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
