import React from "react";
import { Footer } from "./components/Layout";
import { HomeContainer, HeaderContainer } from "./containers";

const App = () => {
	return (
		<div>
			<HeaderContainer />
			<HomeContainer />
			<Footer />
		</div>
	);
};

export default App;