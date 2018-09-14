//This imports React
import React from 'react';

//This imports the other .js files from the components folder
import Titles from './Components/Titles.js';
import Form from './Components/Form';
import Ilm from './Components/Ilm';

class App extends React.Component {  //This initializes the required component

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
			// The render can only return one parent element <div> in this case. Can not return more than one element if you try it will not work and cause an error!
			<div>
				<div className="Container">
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
			</div>
		);
	}

}
export default App; //This exports the App.js to be used in other files. This gets imported into index.js in this case
