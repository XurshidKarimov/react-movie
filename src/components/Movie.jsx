import React from "react";

function Movie({ movie: { Title, Year, imdbID, Type, Poster } }) {

	return (
		<li className="movie-card">
			<div className="">
				<div className="card">
					<div className="card-image">
						{
							Poster == 'N/A' ? <img src={`https://via.placeholder.com/300?text=${Title}`} className="movie-poster"/> : <img src={Poster} className="movie-poster"/>
						}
						<span className="card-title">{ Title }</span>
					</div>
					<div className="card-content">
						<div className="card-content-data">
							<span>Year: </span>
							<span>{ Year }</span>
						</div>
						<div className="card-content-data">
							<span>Type: </span>
							<span>{ Type }</span>
						</div>
					</div>
					<div className="card-action">
						<a href={`https://www.imdb.com/title/${ imdbID }/`}>IMDB link</a>
					</div>
				</div>
			</div>
		</li>
	)
}

export default Movie;