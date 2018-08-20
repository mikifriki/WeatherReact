//importib Reacti jm tähtsa
import React from 'react';

//importib failid siit
import Titles from './Components/Titles.js';
import Form from './Components/Form';
import Ilm from './Components/Ilm';

class App extends React.Component {  //see initializib(alustab) componendi mida vaja '

	state = { 
		Temperatuur: undefined,
		Linn: undefined,
		Riik: undefined,
		Niiskus: undefined,
		Selgitus: undefined,
		Error: undefined
	}

	onWeatherLoaded = (data) => {
		this.setState({
			Temperatuur: data.main.temp,
			Linn: data.name,
			Riik: data.sys.country,
			Niiskus: data.main.humidity,
			Selgitus: data.weather[0].description,
			Error: ''
		});
	}

	onWeatherError = (msg) => {
		this.setState({
			Temperatuur: undefined,
			Linn: undefined,
			Riik: undefined,
			Niiskus: undefined,
			Selgitus: undefined,
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
					Temperatuur={this.state.Temperatuur}
					Niiskus={this.state.Niiskus}
					Linn={this.state.Linn}
					Riik={this.state.Riik}
					Selgitus={this.state.Selgitus}
					Error={this.state.Error}
				/>
			</div>
		);
	}

}
export default App; //laseb muudel failidel sellele ligi pääseda