import { Button } from "@mui/material";

const Dashboard = (props) => {
  const { history } = props;
	return (
    <div className="Dashboard">
      <Button variant="contained" onClick={() => history.push("/dashboard/audit")}>
        Audit
      </Button>
      <Button variant="contained" onClick={() => history.push("/dashboard/issue")}>
        Issue
      </Button>
      <Button variant="contained" onClick={() => history.push("/dashboard/action_plan")}>
        Action Plan
      </Button>
    </div>
  );
};

export default Dashboard;
