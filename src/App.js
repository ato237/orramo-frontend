import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./PageOranizer/Home";
import Download from "./Download";
import Navbar from './Navbar'
import Footer from './Footer'
import Thankyou from "./Sidenav/Thankyou";
import Sidebar from "./Sidebar";
import CurrencyPage from "./PageOranizer/CurrencyPage";

//import Ads from "./Ads";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/download"  component={Download} />
          <Route exact path ="/download/thank-you"  component ={Thankyou}/>
          <Route exact path = "/converter" component ={CurrencyPage}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
