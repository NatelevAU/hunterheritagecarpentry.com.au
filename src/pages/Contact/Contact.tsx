import { Typography } from '@material-ui/core';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

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

const Contact = () => {
  return (
    <div className="Contact">
      <header className="Contact-header">
        <Typography variant="h1">contact us</Typography>
      </header>
      <body className="Contact-body">
        <p>info@hunterheritage.net</p>
        <SocialIcon
          className="Social-icon"
          url="https://www.facebook.com/hunterheritagecarpentry"
          target="_blank"
          rel="noopener noreferrer"
          bgColor="#000000"
        />
        <SocialIcon
          className="Social-icon"
          url="https://www.instagram.com/hunterheritagecarpentry/"
          target="_blank"
          rel="noopener noreferrer"
          bgColor="#000000"
        />
        <SocialIcon
          className="Social-icon"
          url="https://www.linkedin.com/company/hunter-valley-carpentry/"
          target="_blank"
          rel="noopener noreferrer"
          bgColor="#000000"
        />
      </body>
    </div>
  );
};

export default Contact;
