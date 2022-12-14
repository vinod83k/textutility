import { useState } from 'react';
import './App.css';
import Alerts from './Components/Alerts';
import Header from './Components/Header';
//import { ToDos } from './Components/ToDos';
// import { Footer } from './Components/Footer';
import TextForm from './Components/TextForm';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [Alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Router> */}
      <Header />
      <Alerts Alert={Alert} />
      <div className="container">
        {/* <ToDos todos={todos} /> */}
        {/* <Switch> */}
        {/* <Route exact path='/'> */}
        <TextForm showAlert={showAlert} />
        {/* </Route> */}
        {/* <Route path='/home'> */}
        {/* <TextForm showAlert={showAlert} /> */}
        {/* </Route> */}
        {/* <Route exact path='/about'> */}
        {/* <About />
          </Route>
        </Switch> */}
      </div>
      {/* <Footer /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
