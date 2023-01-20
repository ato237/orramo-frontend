import React,{useState} from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./PageOranizer/Home";
import Download from "./Download";
import Navbar from './Navbar'
import Footer from './Footer'
import Thankyou from "./Sidenav/Thankyou";
import CurrencyPage from "./PageOranizer/CurrencyPage";
import Subscriptions from "./Subscriptions";
import Menu from "./Navbar/Menu";
import Homepage from "./Homepage/Homepage";


function App() {
  const[clicked,isClicked] = useState(false)

  return (
    <>
      <Router>
      <Navbar clicked={clicked} isClicked={isClicked} />
      {clicked?<Menu/>:null}

        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/charges-calculator" component={Home} />
          <Route exact path="/download"  component={Download} />
          <Route exact path="/subsriptions" component={Subscriptions}/>
          <Route exact path ="/download/thank-you"  component ={Thankyou}/>
          <Route exact path = "/converter" component ={CurrencyPage}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
