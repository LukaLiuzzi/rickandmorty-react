import { useState } from "react";
import Form from "./components/Form";
import ShowData from "./components/ShowData";

function App() {

	const [characterName, setCharacterName] = useState('')
	
	return (
		<section className="container">
			<h1>Rick And Morty App</h1>
			<Form setCharacterName={setCharacterName}/>
			<ShowData characterName={characterName}/>
		</section>
	);
}

export default App;
