import React from "react";
import mealImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>LazyMeals</h1>
				<HeaderCartButton onShowCart={props.onShowCart} />
			</header>
			<div className={classes["main-image"]}>
				<img src={mealImage} alt="meal_image" />
			</div>
		</>
	);
};

export default Header;
