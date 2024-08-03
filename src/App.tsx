import React, { useState } from "react";

import "./App.css";
import Menu from "./Components/Menu/Menu";
import { Route, Routes } from "react-router-dom";
import Contact from "./Views/Contact/Contact";
import Main from "./Views/Main/Main";

function App() {
	const [isLogued, setIsLogued] = useState(false);

	return (
		<div>
			<Menu isLogued={isLogued} />
			<Routes>
				<Route
					path='/'
					element={
						<Main
							isLogued={isLogued}
							setIsLogued={setIsLogued}
						/>
					}
				/>
				<Route
					path='contact'
					element={<Contact />}
				/>
			</Routes>
		</div>
	);
}

export default App;
