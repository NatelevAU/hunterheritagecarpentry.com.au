import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Services from './pages/Services/Services';

import './index.css';

const AppContainer = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Jobs />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
};

const App = () => {
  const HomeRedirect: React.FC<{}> = props => <Redirect to="/" {...props} />;

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {/* <Route exact path="/" component={Soon} /> */}
        <Route exact path="/" component={AppContainer} />
        <Route path="/home" component={AppContainer} />
        <Route path="/about" component={AppContainer} />
        <Route path="/services" component={AppContainer} />
        <Route path="/jobs" component={AppContainer} />
        <Route path="/testimonials" component={AppContainer} />
        <Route path="/contact" component={AppContainer} />
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
