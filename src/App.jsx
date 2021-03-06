import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./booking/Home";
import Login from "./components/Login";
import Registro from "./components/Registro";
import './components/registro.css';
import TopNav from './components/TopNav'

function App() {
    return ( < BrowserRouter >
        <TopNav/>
        <Switch >
        <Route exact path = "/"
        component = { Home }/> 
        <Route exact path = "/login"component = { Login }/> 
        <Route exact path = "/register" component = { Registro }/> 
        </Switch > 
        </BrowserRouter>
    );
}

export default App;