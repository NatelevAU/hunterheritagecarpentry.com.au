import { Theme, ThemeProvider } from '@material-ui/core';
import React from 'react';

const Page: React.FC<{ content: JSX.Element; theme?: Theme }> = props => {
  const { content, theme } = props;
  return (
    <>
      {theme && <ThemeProvider theme={theme}>{content}</ThemeProvider>}
      {!theme && content}
    </>
  );
};

export default Page;
