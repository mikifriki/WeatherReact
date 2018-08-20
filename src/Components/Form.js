import React from 'react';



//this creates a constant named API_KEY which uses and imports the hidden API key
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

class Form extends React.Component {

	getIlm = async (e) => {
		e.preventDefault();
		const City = e.target.elements.City.value;
		const Country = e.target.elements.Country.value;
		if (!City || !Country) {
			this.props.weatherError('');
			return;
		}

		const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${API_KEY}&units=metric`);
		const data = await api_call.json();


		if (!data || !data.name) {
			this.props.weatherError('Please use a valid location');
			return;
		}

		// If we are here, data is successfully retrieved. Fire up callback fn.
		this.props.weatherLoaded(data);
	}

	render() {
		return (
			<form onSubmit={this.getIlm}>
				<input type="tekst" name="City" placeholder="City..." />
				<input type="tekst "name="Country" placeholder="Country..." />
				<button>Show!</button>
			</form>
		);
	}

}

export default Form;
