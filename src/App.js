import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DownloadPage from "./pages/download";
import Edit from "./pages/edit";

import Home from "./pages/home";

function App() {
	return (
		<div className="App">
			<main>
				<div className="main-container">
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/edit" element={<Edit/>}/>
							<Route path="/download" element={<DownloadPage/>}/>
						</Routes>
					</BrowserRouter>
				</div>
			</main>
		</div>
	);
}

export default App;
