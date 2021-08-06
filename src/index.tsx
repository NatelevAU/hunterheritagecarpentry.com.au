import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
// import Jobs from './pages/Jobs/Jobs';
import PageNotFound from './pages/PageNotFound/PageNotFound';

// import Services from './pages/Services/Services';
// import Testimonials from './pages/Testimonials/Testimonials';
import './index.css';

const App = ({}) => {
  const HomeRedirect: React.FC<{}> = props => <Redirect to="/" {...props} />;

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home" component={HomeRedirect} />
        <Route path="/about" component={About} />
        {/* <Route path="/services" component={Services} /> */}
        {/* <Route path="/jobs" component={Jobs} /> */}
        {/* <Route path="/testimonials" component={Testimonials} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
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
