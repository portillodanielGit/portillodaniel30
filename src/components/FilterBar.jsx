import {useContext} from 'react';
import {PokemonContext} from '../context/PokemonContext';

export const FilterBar = () => {
	const {active, handleCheckbox, typeSelected} = useContext(PokemonContext);
	return (
		<div className={`container-filters ${active ? 'active' : ''}`}>
			<div className="filter-by-type">
				<span>Type</span>

				<div className="group-type">
					{typeSelected.grass ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="grass" id="grass" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="grass" id="grass" />
					)}

					<label htmlFor="grass">Grass</label>
				</div>
				<div className="group-type">
					{typeSelected.fire ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="fire" id="fire" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="fire" id="fire" />
					)}
					<label htmlFor="fire">Fire</label>
				</div>
				<div className="group-type">
					{typeSelected.bug ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="bug" id="bug" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="bug" id="bug" />
					)}
					<label htmlFor="bug">Bug</label>
				</div>
				<div className="group-type">
					{typeSelected.fairy ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="fairy" id="fairy" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="fairy" id="fairy" />
					)}
					<label htmlFor="fairy">Fairy</label>
				</div>
				<div className="group-type">
					{typeSelected.dragon ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="dragon" id="dragon" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="dragon" id="dragon" />
					)}
					<label htmlFor="dragon">Dragon</label>
				</div>
				<div className="group-type">
					{typeSelected.ghost ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="ghost" id="ghost" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="ghost" id="ghost" />
					)}
					<label htmlFor="ghost">Ghost</label>
				</div>
				<div className="group-type">
					{typeSelected.ground ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="ground" id="ground" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="ground" id="ground" />
					)}
					<label htmlFor="ground">Ground</label>
				</div>
				<div className="group-type">
					{typeSelected.normal ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="normal" id="normal" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="normal" id="normal" />
					)}
					<label htmlFor="normal">Normal</label>
				</div>
				<div className="group-type">
					{typeSelected.psychic ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="psychic" id="psychic" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="psychic" id="psychic" />
					)}
					<label htmlFor="psychic">Psychic</label>
				</div>
				<div className="group-type">
					{typeSelected.steel ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="steel" id="steel" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="steel" id="steel" />
					)}
					<label htmlFor="steel">Steel</label>
				</div>
				<div className="group-type">
					{typeSelected.dark ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="dark" id="dark" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="dark" id="dark" />
					)}
					<label htmlFor="dark">Dark</label>
				</div>
				<div className="group-type">
					{typeSelected.electric ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="electric" id="electric" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="electric" id="electric" />
					)}
					<label htmlFor="electric">Electric</label>
				</div>
				<div className="group-type">
					{typeSelected.fighting ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="fighting" id="fighting" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="fighting" id="fighting" />
					)}

					<label htmlFor="fighting">Fighting</label>
				</div>
				<div className="group-type">
					{typeSelected.flying ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="flying" id="flying" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="flying" id="flying" />
					)}
					<label htmlFor="flying">Flying</label>
				</div>
				<div className="group-type">
					{typeSelected.ice ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="ice" id="ice" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="ice" id="ice" />
					)}
					<label htmlFor="ice">Ice</label>
				</div>
				<div className="group-type">
					{typeSelected.poison ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="poison" id="poison" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="poison" id="poison" />
					)}
					<label htmlFor="poison">Poison</label>
				</div>
				<div className="group-type">
					{typeSelected.rock ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="rock" id="rock" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="rock" id="rock" />
					)}
					<label htmlFor="rock">Rock</label>
				</div>
				<div className="group-type">
					{typeSelected.water ? (
						<input type="checkbox" checked onChange={handleCheckbox} name="water" id="water" />
					) : (
						<input type="checkbox" onChange={handleCheckbox} name="water" id="water" />
					)}
					<label htmlFor="water">Water</label>
				</div>
			</div>
		</div>
	);
};
