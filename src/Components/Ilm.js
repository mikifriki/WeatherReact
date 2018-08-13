import React from "react";

class Ilm extends React.Component{

render(){
    return(
        <div>
            <br1/>

            {this.props.Linn && this.props.Riik && 
                <p1>
                    <i class="fa fa-compass"></i>
                    Location: { this.props.Linn} { this.props.Riik } 
                </p1>
            }

            <br/>

            {this.props.Temperatuur && 
                 <p2>
                    <i class="fa fa-thermometer"></i> 
                    Temperature: { this.props.Temperatuur }°C
                 </p2>
            }

            <br/>

            {this.props.Niiskus && 
                <p3>
                    <i class="fa fa-tint"> </i>
                    Humidity: { this.props.Niiskus }%
                </p3>
            }

            <br/>

            { this.props.Selgitus && 
                <p4>
                    <i class="fa fa-cloud"></i>
                    Cloudiness: { this.props.Selgitus}
                </p4>
            }

            <br/>

            { this.props.Error && <p5>{ this.props.Error }</p5>}
            
            

        </div>
    );

    };
}

export default Ilm;