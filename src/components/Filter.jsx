import { useState } from "react";

export default function Filter({ cb }) {
	const [filterType, setType] = useState('');


	const radioHandler = (event) => {
		setType(event.target.value);
		cb(event.target.value);
	}

	return (
		<div className="filter-bar">
			<label>
				<input onChange={radioHandler} className="with-gap" name="group3" type="radio" value='' checked={filterType == ''} />
				<span>All</span>
			</label>
			<label>
				<input onChange={radioHandler} className="with-gap" name="group3" type="radio" value='movie' checked={filterType == 'movie'}/>
				<span>Movies</span>
			</label>
			<label>
				<input onChange={radioHandler} className="with-gap" name="group3" type="radio" value='series' checked={filterType == 'series'}/>
				<span>Series</span>
			</label>
		</div>
	)
}

