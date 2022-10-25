import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";

function App() {
	return (
		<div className="App">
			<main>
				<div className="main-container">
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
					</BrowserRouter>
				</div>
			</main>
		</div>
	);
}

export default App;
