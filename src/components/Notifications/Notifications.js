import "./Notifications.scss";
import NotificationIcon from "../../assets/bell-icon.svg";

const Notifications = () => {
	return (
		<div className="notifications-wrapper">
			<button className="notifications-btn">
				<img src={NotificationIcon} alt="" />
			</button>
		</div>
	);
};

export default Notifications;
