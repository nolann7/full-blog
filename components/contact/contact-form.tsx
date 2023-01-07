import React, { FormEvent, useRef } from 'react';

import classes from './contact-form.module.css';

type ContactFormProps = { children?: React.ReactNode };

const ContactForm = ({}: ContactFormProps) => {
  const emailInputRef = useRef<HTMLInputElement>(null!);
  const nameInputRef = useRef<HTMLInputElement>(null!);
  const messageInputRef = useRef<HTMLTextAreaElement>(null!);
  const submitMessageHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [email, name, message] = [
      emailInputRef.current.value,
      nameInputRef.current.value,
      messageInputRef.current.value,
    ];
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email, name, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) return res.json();

        res.json().then(data => console.log(data.message));
        throw new Error('something went wrong with fetching');
      })
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={submitMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameInputRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea rows={5} id="message" ref={messageInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
