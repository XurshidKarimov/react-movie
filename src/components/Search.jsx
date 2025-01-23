import { useState } from "react";

export default function Search({ cb }) {
	const [search, setSearch] = useState('');

	const searchHandler = (event) => {
		setSearch(event.target.value);
	}

	const enterHandler = (event) => {
		if (event.key == 'Enter' && search) {
				cb(search);
		}
	}

	const clickHandler = () => {
		if (search) {
			cb(search);
		}
	}

	
		return (
			<div className="search-bar">
				<input type="search" value={search} onChange={ searchHandler } onKeyDown={enterHandler}/>
				<button type="button" className="waves-effect waves-light btn" disabled={!search.length}  onClick={ clickHandler }>Search</button>
			</div>
		)
	
}