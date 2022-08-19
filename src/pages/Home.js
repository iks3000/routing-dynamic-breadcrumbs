import { Button } from "@mui/material";

const Home = (props) => {
  const { history } = props;
	return (
    <div className="Home">
      <Button variant="contained" onClick={() => history.push("/dashboard")}>Dashboard</Button>
      <Button variant="contained" onClick={() => history.push("/data_manager")}>Data Manager</Button>
      <Button variant="contained" onClick={() => history.push("/reporting")}>Reporting</Button>
      <Button variant="contained" onClick={() => history.push("/user_management")}>Usert Management</Button>
    </div>
  );
};

export default Home;
