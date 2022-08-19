import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Typography } from "@mui/material";
import { withRouter, Link } from "react-router-dom";

const Breadcrumbs = (props) => {
	const {
		history,
		location: { pathname },
	} = props;

	const pathnames = pathname.split("/").filter(x => x);

  const capitalizeFirst = str => {
    const splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
   return splitStr.join(' '); 
  };

	return (
    <>
      <MUIBreadcrumbs className="breadcrumbs">
        {pathnames.length >= 0 ? (
            <Link className="breadcrumbLink" to="/" onClick={() => history.push("/")}>Home</Link>
          ) : (
            <Typography>Home</Typography>
          )
        }
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          let splitName = name.replace(/_/g , " ");
          return isLast ? (
            <Typography className="typographyName" key={name}>{capitalizeFirst(splitName)}</Typography>
          ) : (
            <Link className="breadcrumbLink" key={name} onClick={() => history.push(routeTo)} to={name}>
              {capitalizeFirst(splitName)}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </>
	);
};

export default withRouter(Breadcrumbs);

/*
{pathnames.length > 0 && 
  (
    <MUIBreadcrumbs className="breadcrumbs">
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        let splitName = name.replace(/_/g , " ");
        return isLast ? (
          <Typography className="typographyName" key={name}>{capitalizeFirst(splitName)}</Typography>
        ) : (
          <Link className="breadcrumbLink" key={name} onClick={() => history.push(routeTo)} to={name}>
            {capitalizeFirst(splitName)}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  )
}
*/