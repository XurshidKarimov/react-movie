import Movie from "./Movie";

function mappedMovieList(movies) {
	return movies.map(movie => <Movie key={movie.imdbID} movie={movie} />);
}

export default function MoviesList({ movies }) {
	return (
		<ul className="movies-list">
			{ mappedMovieList(movies) }
		</ul>
	)
}