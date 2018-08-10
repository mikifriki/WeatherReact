import React from "react";


class Form extends React.Component {

    render(){
        return(
          <form onSubmit={this.props.getIlm }>
            <input type='tekst' name='Linn' placeholder='Linn...'/>

            <input type='tekst' name='Riik' placeholder='Riik...'/>

            <button>Näita Ilma</button>

          </form> 
            
        );
    }

}

export default Form;