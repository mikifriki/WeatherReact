//importib Reacti jm tähtsa
import React from 'react';

//importib failid siit
import Titles from './Components/Titles.js';
import Form from './Components/Form';
import Ilm from './Components/Ilm';

class App extends React.Component {  //see initializib(alustab) componendi mida vaja '

	state = {
		Temperature: undefined,
		City: undefined,
		Country: undefined,
		Humidity: undefined,
		Forecast: undefined,
		Error: undefined
	}

	onWeatherLoaded = (data) => {
		this.setState({
			Temperature: data.main.temp,
			City: data.name,
			Country: data.sys.country,
			Humidity: data.main.humidity,
			Forecast: data.weather[0].description,
			Error: ''
		});
	}

	onWeatherError = (msg) => {
		this.setState({
			Temperature: undefined,
			City: undefined,
			Country: undefined,
			Humidity: undefined,
			Forecast: undefined,
			Error: msg
		});
	}

	render() {
		return (
			//saab ainult ühe parent elemendi returnida, sees võib olla ükskõik nt: <div><p>hey</p>midagi</div>
			<div>
				<Titles />
				<Form weatherLoaded={this.onWeatherLoaded} weatherError={this.onWeatherError} />
				<Ilm
					Temperature={this.state.Temperature}
					Humidity={this.state.Humidity}
					City={this.state.City}
					Country={this.state.Country}
					Forecast={this.state.Forecast}
					Error={this.state.Error}
				/>
			</div>
		);
	}

}
export default App; //laseb muudel failidel sellele ligi pääseda
