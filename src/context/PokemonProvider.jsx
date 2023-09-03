import {useEffect, useRef, useState} from 'react';
import {useForm} from '../hook/useForm';
import {PokemonContext} from './PokemonContext';

export const PokemonProvider = ({children}) => {
	const [allPokemons, setAllPokemons] = useState([]);
	const [globalPokemons, setGlobalPokemons] = useState([]);
	const [offset, setOffset] = useState(0);

	//Utilizar Customhook - useForm para extraer

	const {valueSearch, onInputChange, onResetForm} = useForm({
		valueSearch: '',
	});

	//Estados para la aplicacion simples
	const [loading, setLoading] = useState(true);
	const [active, setActive] = useState(false);

	//Lamar 50 pokemones a la API
	const getAllPokemons = async (limit = 50) => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
		const data = await res.json();
		const promises = data.results.map(async (pokemon) => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);
		setAllPokemons([...allPokemons, ...results]);
		setLoading(false);
	};
	//Llamar todos los pokemones
	const getGlobalPokemons = async () => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
		const data = await res.json();
		const promises = data.results.map(async (pokemon) => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);
		setGlobalPokemons(results);
		setLoading(false);
	};
	//LLamar a un pokemon por id
	const getPokemonByID = async (id) => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon/${id}`);
		const data = res.json();
		return data;
	};

	useEffect(() => {
		getAllPokemons();
	}, [offset]);

	useEffect(() => {
		getGlobalPokemons();
	}, []);

	// BTN cargar mas
	const onClickLoadMore = () => {
		setOffset(offset + 50);
	};

	//Filter Function+ State
	const [typeSelected, setTypeSelected] = useState({
		grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
	});

	const [filteredPokemons, setfilteredPokemons] = useState([]);
	const typeCheckBox = useRef([]);

	const handleCheckbox = (e) => {
		setTypeSelected({
			...typeSelected,
			[e.target.name]: e.target.checked,
		});

		if (e.target.checked) {
			if (!typeCheckBox.current.includes(e.target.name)) {
				typeCheckBox.current = [...typeCheckBox.current, e.target.name];
			}
			if (typeCheckBox.current.length >= 3) {
				return;
			}
			let filteredResults = '';
			if (typeCheckBox.current.length == 2) {
				let checker = (box, target) => target.every((v) => box.includes(v));
				filteredResults = globalPokemons.filter((pokemon) => {
					const types = pokemon.types.map((type) => type.type.name);
					return checker(types, typeCheckBox.current);
				});
			} else {
				filteredResults = globalPokemons.filter((pokemon) => pokemon.types.map((type) => type.type.name).includes(e.target.name));
			}
			setfilteredPokemons([...filteredResults]);
		} else {
			let filteredResults = '';
			typeCheckBox.current = typeCheckBox.current.filter((type) => type !== e.target.name);
			if (typeCheckBox.current.length == 0) {
				filteredResults = filteredPokemons.filter((pokemon) => !pokemon.types.map((type) => type.type.name).includes(e.target.name));
			} else {
				let checker = (box, target) => target.every((v) => box.includes(v));
				filteredResults = globalPokemons.filter((pokemon) => {
					const types = pokemon.types.map((type) => type.type.name);
					return checker(types, typeCheckBox.current);
				});
			}
			setfilteredPokemons([...filteredResults]);
		}
	};

	return (
		<PokemonContext.Provider
			value={{
				valueSearch,
				onInputChange,
				onResetForm,
				allPokemons,
				globalPokemons,
				getPokemonByID,
				onClickLoadMore,
				loading,
				setLoading,
				active,
				setActive,
				//filter containers
				handleCheckbox,
				filteredPokemons,
				typeCheckBox,
				typeSelected,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};
