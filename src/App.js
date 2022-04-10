
import './App.css';
import {Component} from "react";

const styledField = {
    width: '200px',
    background: "#343434"
}

class Field extends Component {
    render() {
        const holder = 'enter here'
        return <input
            style={styledField}
            type='text'
            placeholder={holder}/>
    }
}

const Header = () => {
    return <h2>Ass We can</h2>
}
//const Field = () => {
  //  const holder = 'enter here'

//     return <input
//         style={styledField}
//         type='text'
//         placeholder={holder}/>
// }

function Btn(){
    const logIn = "Log In"
    const logged = true
    return <button>{logged ? "enter" : logIn}</button>
}


function App() {
  return (
    <div className="App">
        <Header/>
        <Field/>
        <Btn/>
    </div>
  );
}

export {styledField, Btn}
export default App;
