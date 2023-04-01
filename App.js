import "./App.css";
// importing components from react-router-dom package
import { BrowserRouter as Router} from "react-router-dom";
import { Switch} from "react-router-dom";
import { Route} from "react-router-dom";
import { Redirect} from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
  
// import Home component
import Home from "./components/Home";
// import About component
import AboutUs from "./components/AboutUs";
// import ContactUs component
import ContactUs from "./components/Contact";
// import Sermon component
import Sermons from "./components/Sermons";

  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/Home", in component props 
          we passes the imported component*/}
          <Route exact path="/Home" component={Home} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/AboutUs" component={AboutUs} />

             {/* This route is for about component 
          with exact path "/Sermons", in component 
          props we passes the imported component*/}
          <Route path="/Sermons" component={Sermons} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/Contact" component={ContactUs} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Redirect to="/Home" />
        </Switch>
      </Router>
    </>
  );
}
  
export default App;