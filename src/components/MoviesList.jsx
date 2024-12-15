import React from "react";
import Movie from "./Movie";

function mappedMovieList(movies) {
	return movies.map(movie => <Movie key={movie.imdbID} movie={movie} />);
}

function MoviesList({ movies }) {
	return (
		<ul className="movies-list">
			{ mappedMovieList(movies) }
		</ul>
	)
}

export default MoviesList;