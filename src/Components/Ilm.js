import React from "react";

class Ilm extends React.Component{

render(){
    return(
            <div>
           
            { this.props.Linn && this.props.Riik && <p>Location: { this.props.Linn} { this.props.Riik }</p>}
            { this.props.Temperatuur && <p>Temperature: { this.props.Temperatuur }</p>}
            { this.props.Niiskus && <p>Humidity: { this.props.Niiskus }</p>}
            { this.props.Selgitus && <p>Clarity: { this.props.Selgitus}</p>}
            { this.props.Error && <p>{ this.props.Error }</p>}
            
            

            </div>
    );

    };
}

export default Ilm;