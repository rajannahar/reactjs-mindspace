import React from "react";

/*export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.initialAge, 
			status: 0, 
			homeLink: props.initialLinkName
		};

		setTimeout(() => {
			this.setState({
				status: 1
			});
		}, 3000);

		console.log("Constructor");
	}

	// Component Lifecycle Hooks
	componentWillMount() {
		console.log("Component will mount");
	}

	componentDidMount() {
		console.log("Component did mount");
	}

	componentWillReceiveProps(nextProps) {
		console.log("Component will receive props ", nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("Should component update ", nextProps, nextState);
		// if (nextState.status === 1) {
		// 	return false; //overrides (blocks) the default to set state to 1 in setTimeout
		// }
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("Component will update ", nextProps, nextState);
	}

	componentDidUpdate(previousProps, previousState) {
		console.log("Component did update ", previousProps, previousState);
	}

	componentWillUnmount() {
		console.log("Component will unmount");
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
		console.log(this.state.age);
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	onHanndleChange(event) {
		this.setState({
			homeLink: event.target.value
		});
	}

	render() {
		// console.log(this.props);

		return (
			<div>
				<p>In a new Component!</p>
				<p>Your name is {this.props.name} and your age is {this.state.age}</p>
				<p>Status: {this.state.status}</p>
			
				<hr/>
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>

				<hr/>
				<button onClick={this.props.greet} className="btn btn-primary">Greet</button>

				<hr/>
				<input type="text" 
					value={this.state.homeLink} 
					onChange={(event) => this.onHanndleChange(event)} 
				/>
				<br/>
				<button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>

			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number, 
	greet: React.PropTypes.func, 
	initialLinkName: React.PropTypes.string
};*/


export class Home extends React.Component {
	render() {
		return (
			<div>
				<h3>Home</h3>
			</div>
		);
	}
}

