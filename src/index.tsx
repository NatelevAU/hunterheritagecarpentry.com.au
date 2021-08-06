import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
// import Jobs from './pages/Jobs/Jobs';
import PageNotFound from './pages/PageNotFound/PageNotFound';

// import Services from './pages/Services/Services';
// import Testimonials from './pages/Testimonials/Testimonials';
import './index.css';

const App = ({}) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/services" component={Services} /> */}
        {/* <Route exact path="/jobs" component={Jobs} /> */}
        {/* <Route exact path="/testimonials" component={Testimonials} /> */}
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
