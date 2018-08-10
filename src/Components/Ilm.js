import React from "react";

class Ilm extends React.Component{

render(){
    return(
            <div>
           
            { this.props.Linn && this.props.Riik && <p>Asukoht: { this.props.Linn} { this.props.Riik }</p>}
            { this.props.Temperatuur && <p>Temperatuur: { this.props.Temperatuur }</p>}
            { this.props.Niiskus && <p>Niiskus: { this.props.Niiskus }</p>}
            { this.props.Selgitus && <p>Selgitus: { this.props.Selgitus}</p>}
            { this.props.Error && <p>{ this.props.Error }</p>}
            
            

            </div>
    );

    };
}

export default Ilm;