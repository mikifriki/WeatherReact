//importib Reacti jm tähtsa
import React from "react";

//importib failid siit
import Titles from "./Components/Titles.js";
import Form from "./Components/Form";
import Ilm from "./Components/Ilm";

const API_KEY = "7ff9aafa73fb706223dd209f53908496";

class App extends React.Component{  //see initializib(alustab) componendi mida vaja '


    state = { // see on object
        Temperatuur:undefined,
        Linn: undefined,
        Riik: undefined,
        Niiskus:undefined,
        Selgitus:undefined,
        Error:undefined



    }

    getIlm = async (e) => {
          e.preventDefault();
          const Linn = e.target.elements.Linn.value;   
          const Riik = e.target.elements.Riik.value;   
          const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Linn},${Riik}&appid=${API_KEY}&units=metric`);  
          const data = await api_call.json(); 
          console.log(data);     
           
         if (Linn && Riik){
            this.setState({
                Temperatuur: data.main.temp,
                Linn: data.name,
                Riik: data.sys.country,
                Niiskus: data.main.humidity,
                Selgitus: data.weather[0].description,
                Error: ""
                })
           }
 
         else { // asukoht on väga tähtis muidu tuleb error!!!!.
                this.setState ({
                Temperatuur: undefined,
                Linn: undefined,
                Riik: undefined,
                Niiskus: undefined,
                Selgitus: undefined,
                Error: "Please enter a location"});     
              } 
        }
        
    render(){
        return(
            //saab ainult ühe parent elemendi returnida, sees võib olla ükskõik nt: <div><p>hey</p>midagi</div>
          <div>
            <Titles />
            <Form getIlm={this.getIlm}/>
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