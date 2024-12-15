import React from "react";

function Footer() {
	return (
		<footer className="page-footer green">
				<div className="footer-copyright green">
					<div className="">
					© { new Date().getFullYear() } Copyright Text
					<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
					</div>
				</div>
			</footer>
	)
	
}

export default Footer;