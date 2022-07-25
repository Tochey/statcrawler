import React from "react";
import Hero from "../layouts/hero/hero";
import Works from "../layouts/works/how-it-works";
import Teams from "../layouts/design/design-for-teams";
import Features from "../layouts/features/features";

function LandingPage() {
	return (
		<div>
			<Hero />
			<Teams />
			<Works />
			<Features />
		</div>
	);
}

export default LandingPage;
