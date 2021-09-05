import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./PageOranizer/Home";
import Download from "./Download";
import Navbar from './Navbar'
import Footer from './Footer'
import Thankyou from "./Sidenav/Thankyou";
import Sidebar from "./Sidebar";

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
          <Route path="/" exact component={Home} />
          <Route path="/download" exact component={Download} />
          <Route path ="/download/thank-you" exact component ={Thankyou}/>

        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
