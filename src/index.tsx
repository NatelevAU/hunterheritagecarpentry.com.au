import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
// import Jobs from './pages/Jobs/Jobs';
import PageNotFound from './pages/PageNotFound/PageNotFound';
// import Services from './pages/Services/Services';
import Soon from './pages/Soon/Soon';

// import Testimonials from './pages/Testimonials/Testimonials';
import './index.css';

const App = ({}) => {
  const HomeRedirect: React.FC<{}> = props => <Redirect to="/" {...props} />;

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Soon} />
        {/* <Route exact path="/home" component={HomeRedirect} /> */}
        <Route exact path="/home" component={Home} />
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
