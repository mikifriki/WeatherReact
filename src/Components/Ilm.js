import React from "react";

class Ilm extends React.Component{

render(){
    return(
        <div>
            <br1/>

            {this.props.Linn && this.props.Riik && 
                <p class="City">
                    <i class="fa fa-compass"></i>
                    Location: { this.props.Linn} { this.props.Riik } 
                </p>
            }

            

            {this.props.Temperatuur && 
                 <p class="Temp">
                    <i class="fa fa-thermometer"></i> 
                    Temperature: { this.props.Temperatuur }°C
                 </p>
            }

            {this.props.Niiskus && 
                <p class="Humidity">
                    <i class="fa fa-tint"> </i>
                    Humidity: { this.props.Niiskus }%
                </p>
            }

            { this.props.Selgitus && 
                <p class="Cloud">
                    <i class="fa fa-cloud"></i>
                    Cloudiness: { this.props.Selgitus}
                </p>
            }
            
            { this.props.Error && <p5>{ this.props.Error }</p5>}
            
            

        </div>
    );

    };
}

export default Ilm;