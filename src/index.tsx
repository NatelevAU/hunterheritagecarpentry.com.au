import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
  return (
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<AppContainer />} />
        <Route path="/home" element={<AppContainer />} />
        <Route path="/about" element={<AppContainer />} />
        <Route path="/services" element={<AppContainer />} />
        <Route path="/jobs" element={<AppContainer />} />
        <Route path="/testimonials" element={<AppContainer />} />
        <Route path="/contact" element={<AppContainer />} />
        <Route path="*" element={<PageNotFoundContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
