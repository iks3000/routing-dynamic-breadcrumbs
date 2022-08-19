import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Dashboard from "../../pages/Dashboard";
import DataManagers from "../../pages/DataManager";
import Reporting from "../../pages/Reporting";
import UserManagement from "../../pages/UserManagement";
import Audit from "../../pages/Audit";
import Issue from "../../pages/Issue";
import ActionPlan from "../../pages/ActionPlan";
import Test from "../../pages/Test";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";


const Body = () => {
	return (
		<div className="Body">
			<Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
				<Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
				<Route exact path="/data_manager" render={(props) => <DataManagers {...props} />}/>
				<Route exact path="/reporting" render={(props) => <Reporting {...props} />}/>
				<Route exact path="/user_management" render={(props) => <UserManagement {...props} />}/>
				<Route exact path="/dashboard/audit" render={(props) => <Audit {...props} />}/>
				<Route exact path="/dashboard/issue" render={(props) => <Issue {...props} />}/>
        <Route exact path="/dashboard/action_plan" render={(props) => <ActionPlan {...props} />}/>
         <Route exact path="/dashboard/action_plan/test" render={(props) => <Test {...props} />}/>
			</Switch>
      <div className="breadcrumbsWrapper">
        <Breadcrumbs />
      </div>
		</div>
	);
};

export default Body;
