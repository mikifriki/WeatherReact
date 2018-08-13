import React from "react";


class Form extends React.Component {

    render(){
        return(
          <form onSubmit={this.props.getIlm }>
            <input type='tekst' name='Linn' placeholder='City...'/>
            
            <input type='tekst' name='Riik' placeholder='Country...'/>
            
            <button>Show!</button>

          </form> 
            
        );
    }

}


export default Form;