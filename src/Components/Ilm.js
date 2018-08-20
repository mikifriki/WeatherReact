import React from 'react';

class Ilm extends React.Component {

	render() {
		return (
			<div>
				{
					this.props.City && this.props.Country &&
					<p className="City">
						<i className="fa fa-compass"></i>
						Location: {this.props.City} {this.props.Country}
					</p>
				}

				{
					this.props.Temperature &&
					<p className="Temp">
						<i className="fa fa-thermometer"></i>
						Temperature: {this.props.Temperature}°C
					</p>
				}

				{
					this.props.Humidity &&
					<p className="Humidity">
						<i className="fa fa-tint"> </i>
						Humidity: {this.props.Humidity}%
					</p>
				}

				{
					this.props.Forecast &&
					<p className="Cloud">
						<i className="fa fa-cloud"></i>
						Forecast: {this.props.Forecast}
					</p>
				}

				{
					this.props.Error &&
					<p>
						{this.props.Error}
					</p>
				}
			</div>
		);
	}

}
export default Ilm;
