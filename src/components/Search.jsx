import { Component } from "react";

class Search extends Component{
	state = {
		search: ''
	}

	searchHandler = (event) => {
		this.setState({ search: event.target.value })
	}

	enterHandler = (event) => {
		if (event.key == 'Enter' && this.state.search) {
				this.props.cb(this.state.search);
		}
	}

	clickHandler = () => {
		if (this.state.search) {
			this.props.cb(this.state.search);
			}
	}

	render() {
		const { search } = this.state;

		return (
			<div className="search-bar">
				<input type="search" value={search} onChange={ this.searchHandler } onKeyDown={this.enterHandler}/>
				<button type="button" className="waves-effect waves-light btn" disabled={!search.length}  onClick={ this.clickHandler }>Search</button>
			</div>
		)
	}
}

export default Search;