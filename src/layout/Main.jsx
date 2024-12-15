import { Component } from "react";
import MoviesList from '../components/MoviesList';
import Search from '../components/Search';
import Preloader from '../components/Preloader';
import Filter from "../components/Filter";

class Main extends Component {
	state = {
		movies: [],
		total: 0,
		loading: false,
		title: '',
		type: ''
	}
	
	API_KEY = import.meta.env.VITE_API_KEY;

	fetchMovies = async () => {
		this.setState({ loading: true });

		const { title, type } = this.state;

		try {
			const response = await fetch(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${title}${type ? `&type=${type}` : ''}`);
			const { Search, totalResults } = await response.json();

			if (Search) {
				this.setState({ movies: Search, total: totalResults });
			}
		}
		catch (error) {
			console.error(error);
		}
		finally {
			this.setState({ loading: false });
		}
		
	}
	
	setFilter = async (type) => {
		this.setState({ type }, async () => {
				await this.fetchMovies();
		});
	}

	setTitle = (title) => {
		this.setState({ title }, async () => {
				await this.fetchMovies();			
		});
	}

	render() {
		const { movies, loading } = this.state;

		return (
			<main className='main container'>
				<Search cb={this.setTitle} />
				<Filter cb={this.setFilter}/>
				{
					loading ? <Preloader /> : movies.length ? <MoviesList movies={movies}/> : <p>Нет результатов</p>
				}
			
     </main>
		)
	}
	
}

export default Main;