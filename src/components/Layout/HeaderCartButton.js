import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context.js";

const HeaderCartButton = (props) => {
	const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);
	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;
	const numberOfCartItems = items.reduce((resultNum, currentNumber) => {
		return resultNum + currentNumber.amount;
	}, 0);
	const btnClasses = `${classes.button} ${
		btnIsHighlighted ? classes.bump : ""
	}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsHighLighted(true);

		const timer = setTimeout(() => {
			setBtnIsHighLighted(false);
		}, 300);
		return () => {
			clearTimeout(timer);
		};
	}, [items]);
	return (
		<button onClick={props.onShowCart} className={btnClasses}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;