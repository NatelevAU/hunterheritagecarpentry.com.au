import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

import { BLACK } from '../../Style';

import './Contact.css';

// const ContactForm = () => {
//   const [state, handleSubmit] = useForm('xoqykbyo');
//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>;
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email Address</label>
//       <input id="email" type="email" name="email" />
//       <ValidationError prefix="Email" field="email" errors={state.errors} />
//       <textarea id="message" name="message" />
//       <ValidationError prefix="Message" field="message" errors={state.errors} />
//       <Button variant="contained" color="primary">
//         Submit
//       </Button>
//     </form>
//   );
// };

const SocialButton: React.FC<{
  url: string;
  bgColor?: string;
  fgColor?: string;
  margin?: number;
  sameTab?: boolean;
}> = props => {
  const { url, bgColor, fgColor, margin, sameTab } = props;
  return (
    <SocialIcon
      url={url}
      target={sameTab ? undefined : '_blank'}
      rel={sameTab ? undefined : 'noopener noreferrer'}
      style={{ margin: margin !== undefined ? margin : 20 }}
      bgColor={bgColor ? bgColor : BLACK}
      fgColor={fgColor ? fgColor : undefined}
    />
  );
};

const Contact = () => {
  return (
    <div className="Contact">
      <Box className="Contact-body" textAlign="center">
        <Typography variant="h1">contact us</Typography>
        <Typography
          style={{
            fontFamily: 'EB Garamond',
            fontSize: `calc(15px + 2vmin)`,
          }}
        >
          <p>info@hunterheritage.net</p>
        </Typography>
        {/* <FormspreeContact formId="xoqykbyo" /> */}
        <SocialButton url="https://www.facebook.com/hunterheritagecarpentry" />
        <SocialButton url="https://www.instagram.com/hunterheritagecarpentry/" />
        <SocialButton url="https://www.linkedin.com/company/hunter-valley-carpentry/" />
      </Box>
      <Typography
        style={{
          fontFamily: 'EB Garamond',
          fontSize: `calc(10px + 1vmin)`,
        }}
      >
        <p>ABN 98 633 779 198 / LIC 366974C</p>
      </Typography>
    </div>
  );
};

export default Contact;
