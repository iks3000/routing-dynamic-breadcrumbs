import Search from "../Search/Search";
import Notifications from "../Notifications/Notifications";
import UserName from "../UserName/UserName";
import Navbar from "../Navbar/Navbar";

import "./Header.scss";

const Header = () => {
	return (
		<header className="header">
			<Navbar />
			<div className="components-wrapper">
				<Search type="search" placeholder="Search" />
				<Notifications />
				<UserName userName="Name" />
			</div>
		</header>
	);
};

export default Header;
