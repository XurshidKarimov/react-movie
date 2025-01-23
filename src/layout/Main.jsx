import { useState, useRef, useEffect } from "react";
import MoviesList from '../components/MoviesList';
import Search from '../components/Search';
import Preloader from '../components/Preloader';
import Filter from "../components/Filter";

export default function Main() {
	const [movies, setMovies] = useState([]);
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(false);
	const [title, setStateTitle] = useState('');
	const [type, setType] = useState('');
	const API_KEY = import.meta.env.VITE_API_KEY;

	const fetchMovies = async () => {
		setLoading(true);

		try {
			const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}${type ? `&type=${type}` : ''}`);
			const { Search, totalResults } = await response.json();

			if (Search) {
				setMovies(Search);
				setTotal(totalResults);
			}
			else{
				setMovies([]);
			}
		}
		catch (error) {
			console.error(error);
		}
		finally {
			setLoading(false);
		}
		
	}
	
	useEffect(() => {
		fetchMovies();
	}, [title, type]);
	
		return (
			<main className='main container'>

				<Search cb={setStateTitle} />
				<Filter cb={setType}/>
				{
					loading ? <Preloader /> : movies.length ? <MoviesList movies={movies}/> : <p>Нет результатов</p>
				}
			
     </main>
		)
	
	
}