import { Box, Button, TextField, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

import { BLACK, WHITE } from '../Style';

const formTheme = createTheme({
  palette: {
    primary: {
      main: BLACK,
    },
    secondary: {
      main: WHITE,
    },
  },
});

const FormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const FormspreeContact: React.FC<{ formId: string }> = props => {
  /* Server State Handling */
  const { formId } = props;
  const url = 'http://formspree.io/'.concat(formId);
  const isSubmitting = false;
  const [serverState, setServerState] = useState<{ ok: boolean; msg: string }>();
  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (
    values: any,
    actions: { setSubmitting: (arg0: boolean) => void; resetForm: () => void },
  ) => {
    axios({
      method: 'POST',
      url: url,
      data: values,
    })
      .then((response: any) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, 'Thanks!');
      })
      .catch((error: { response: { data: { error: any } } }) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <ThemeProvider theme={formTheme}>
      <Box marginLeft="20px" marginRight="20px">
        <Formik
          initialValues={{ email: '', message: '' }}
          onSubmit={handleOnSubmit}
          validationSchema={FormSchema}
        >
          <Form id="fs-frm" noValidate autoComplete="off">
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="filled"
              fullWidth={true}
              style={{ marginBottom: '20px' }}
            />
            <br></br>
            {/* <ErrorMessage name="email" className="errorMsg" component="p" /> */}
            <TextField
              id="message"
              label="Message"
              type="message"
              variant="filled"
              multiline
              minRows={5}
              fullWidth={true}
              style={{ marginBottom: '20px' }}
            />
            <br></br>
            {/* <ErrorMessage name="message" className="errorMsg" component="p" /> */}
            <Button type="submit" disabled={isSubmitting} color="secondary" variant="contained">
              Send
            </Button>
            {serverState && <p className={!serverState.ok ? 'errorMsg' : ''}>{serverState.msg}</p>}
          </Form>
        </Formik>
      </Box>
    </ThemeProvider>
  );
};

export default FormspreeContact;
