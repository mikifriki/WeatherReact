import React from 'react';

class Ilm extends React.Component {


	render() {
		return (
			<div>
				<br1 />

				{
					this.props.Linn && this.props.Riik &&
					<p className="City">
						<i className="fa fa-compass"></i>
						Location: {this.props.Linn} {this.props.Riik}
					</p>
				}



				{
					this.props.Temperatuur &&
					<p className="Temp">
						<i className="fa fa-thermometer"></i>
						Temperature: {this.props.Temperatuur}°C
					</p>
				}

				{
					this.props.Niiskus &&
					<p className="Humidity">
						<i className="fa fa-tint"> </i>
						Humidity: {this.props.Niiskus}%
					</p>
				}

				{
					this.props.Selgitus &&
					<p className="Cloud">
						<i className="fa fa-cloud"></i>
						Cloudiness: {this.props.Selgitus}
					</p>
				}

				{this.props.Error && <p5>{this.props.Error}</p5>}
			</div>
		);
	}

}
export default Ilm;