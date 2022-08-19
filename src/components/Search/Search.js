import { useState } from "react";
import "./Search.scss";
import SearchIcon from "../../assets/search-icon.svg";
//type InputEvent = React.ChangeEvent<HTMLInputElement>;


const Search = ({ type, placeholder }) => {
	const [enteredText, setEnteredText] = useState("");

	const keyDownHandler = (event) => {
		if (event.code === "Enter") {
			console.log(`You have typed "${enteredText}"`);
		}
	};

	const keyPressHandler = (event) => {
		if (event.code === "Enter") {
			setEnteredText("");
		}
	};

	return (
		<div className="input-wrapper">
			<input
				className="inputSearch"
				type={type ?? "text"}
				value={enteredText}
				placeholder={placeholder}
				onKeyDown={keyDownHandler}
				onKeyPress={keyPressHandler}
				onChange={(e) => setEnteredText(e.target.value)}
			/>
			<img src={SearchIcon} className="search-icon" alt="Search Icon" />
		</div>
	);
};

export default Search;
