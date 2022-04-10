import logo from './logo.svg';
import './App.css';

const styledField = {
    width: '200px',
    background: "#343434"
}

const Header = () => {
    return <h2>Ass We can</h2>
}
const Field = () => {
    const holder = 'enter here'

    return <input 
        style={styledField}
        type='text'
        placeholder={holder}/>
}

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
