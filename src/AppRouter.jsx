import {Navigate, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
import SearchPage from './pages/SearchPage';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/portillodaniel30/" element={<Navigation></Navigation>}>
				<Route index element={<HomePage></HomePage>}></Route>
				<Route path="/portillodaniel30/pokemon/:id" element={<PokemonPage></PokemonPage>}></Route>
				<Route path="/portillodaniel30/search" element={<SearchPage></SearchPage>}></Route>
			</Route>
		</Routes>
	);
};

export default AppRouter;
