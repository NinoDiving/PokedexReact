import PokemonCard from "./components/PokemonCard";

import "./App.css";

function App() {
	return (
		<>
			<PokemonCard
				name="Bulbasaur"
				imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
			/>
		</>
	);
}

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

export default App;
