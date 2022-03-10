import React,{useEffect} from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./PageOranizer/Home";
import Download from "./Download";
import Navbar from './Navbar'
import Footer from './Footer'
import Thankyou from "./Sidenav/Thankyou";
import Sidebar from "./Sidebar";
import CurrencyPage from "./PageOranizer/CurrencyPage";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(()=>{
    const pushAd = () => {
      try {
        const adsbygoogle = window.adsbygoogle
        console.log({ adsbygoogle })
        adsbygoogle.push({})
      } catch (e) {
        console.error(e)
      }
    }

    let interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if (window.adsbygoogle) {
        pushAd()
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval)
      }
    }, 300)

    return () => {
      clearInterval(interval)
    }
  },[])
  return (
    <>
      <Router>
      <ins className='adsbygoogle'
          style={{ display: "inline-block", width: "30px", height: "50px" }}
          data-ad-client='ca-pub-12121212'
          data-ad-slot='12121212'
          data-ad-format='auto' />
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
