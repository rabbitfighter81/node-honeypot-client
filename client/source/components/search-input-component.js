import React from 'react'

export default React.createClass({

	displayName: 'Search Input Component',

	componentDidMount() {
		console.log("Search Input mounted...")
	},

	componentWillUnmount() {
		console.log("Search Input un-mounted...")
	},

	render() {
		return (
			<input
				className="search-input"
				type="text"
				placeholder={this.props.placeholder}
				value={this.props.value}
				onChange={this.props.updateSearch} />
		)
	}
})