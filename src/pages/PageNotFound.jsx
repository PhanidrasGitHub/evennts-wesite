import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			height: "100vh",
			background: "#f8f8f8"
		}}>
			<h1 style={{ fontSize: "4rem", color: "#646cff" }}>404</h1>
			<h2>Page Not Found</h2>
			<p>The page you are looking for does not exist.</p>
			
		</div>
	);
};

export default PageNotFound;
