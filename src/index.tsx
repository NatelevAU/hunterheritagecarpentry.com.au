import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Page from './components/Page';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Services from './pages/Services/Services';
import { Theme1, Theme2 } from './Themes';

import './index.css';

const DefaultTheme = Theme1;

const AppContainer = () => {
  return (
    <>
      <Page content={<Home />} theme={Theme1} />
      <Page content={<About />} theme={Theme2} />
      <Page content={<Services />} theme={Theme1} />
      <Page content={<Jobs />} theme={Theme2} />
      {/* <Page content={<Testimonials />} theme={Theme1} /> */}
      <Page content={<Contact />} theme={Theme1} />
    </>
  );
};

const PageNotFoundContainer = () => {
  return <Page content={<PageNotFound />} theme={DefaultTheme} />;
};

const App = () => {
  const HomeRedirect: React.FC<{}> = props => <Redirect to="/" {...props} />;

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={AppContainer} />
        <Route path="/home" component={AppContainer} />
        <Route path="/about" component={AppContainer} />
        <Route path="/services" component={AppContainer} />
        <Route path="/jobs" component={AppContainer} />
        <Route path="/testimonials" component={AppContainer} />
        <Route path="/contact" component={AppContainer} />
        <Route component={PageNotFoundContainer} />
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
