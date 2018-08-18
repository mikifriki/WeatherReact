import React from "react";

const API_KEY = "7ff9aafa73fb706223dd209f53908496";

class Form extends React.Component {

	getIlm = async (e) => {
		e.preventDefault();
		const Linn = e.target.elements.Linn.value;
		const Riik = e.target.elements.Riik.value;
		if (!Linn || !Riik) {
			this.props.weatherError("");
			return;
		}

		const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Linn},${Riik}&appid=${API_KEY}&units=metric`);
		const data = await api_call.json();
		console.log(data);

		if (!data || !data.name) {
			this.props.weatherError("Invalid response");
			return;
		}

		// If we are here, data is successfully retrieved. Fire up callback fn.
		this.props.weatherLoaded(data);
	}

	render() {
		return (
			<form onSubmit={this.getIlm}>
				<input type='tekst' name='Linn' placeholder='City...' />
				<input type='tekst' name='Riik' placeholder='Country...' />
				<button>Show!</button>
			</form>
		);
	}
}

export default Form;