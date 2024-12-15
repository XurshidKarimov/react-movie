import { Component } from "react";

class Filter extends Component {
	state = {
		type: ''
	}


	radioHandler = (event) => {
		this.setState({ type: event.target.value }, () => {
				this.props.cb(this.state.type);
		});
	}


	render() {
		const { type } = this.state;

		return (
			<div className="filter-bar">
				<label>
					<input onChange={this.radioHandler} className="with-gap" name="group3" type="radio" value='' checked={type == ''} />
					<span>All</span>
				</label>
				<label>
					<input onChange={this.radioHandler} className="with-gap" name="group3" type="radio" value='movie' checked={type == 'movie'}/>
					<span>Movies</span>
				</label>
				<label>
					<input onChange={this.radioHandler} className="with-gap" name="group3" type="radio" value='series' checked={type == 'series'}/>
					<span>Series</span>
				</label>
			</div>
		)
	}
}

export default Filter;