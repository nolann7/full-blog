import { useRouter } from 'next/router';
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from 'react';
import Notification from '../ui/notification';

import classes from './contact-form.module.css';

type ContactFormProps = { children?: React.ReactNode };
type NotificationType = {
  title: string;
  message: string;
  status: 'success' | 'error' | 'pending';
};
const ContactForm = ({}: ContactFormProps) => {
  const [isNotificationShown, setIsNotificationShown] = useState(false);
  const [notification, setNotification] = useState<NotificationType>({
    title: '',
    message: '',
    status: 'pending',
  });
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  // const emailInputRef = useRef<HTMLInputElement>(null!);
  // const nameInputRef = useRef<HTMLInputElement>(null!);
  // const messageInputRef = useRef<HTMLTextAreaElement>(null!);
  const router = useRouter();

  useEffect(() => {
    if (notification.status === 'success' || notification.status === 'error') {
      const timer = setTimeout(() => {
        setIsNotificationShown(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.status]);

  const submitMessageHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // let [email, name, message] = [
    //   emailInputRef.current.value,
    //   nameInputRef.current.value,
    //   messageInputRef.current.value,
    // ];
    setNotification({
      title: 'Loading...',
      message: 'Sending message',
      status: 'pending',
    });
    setIsNotificationShown(true);

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email, name, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) return res.json();

        res.json().then(data => {
          setNotification({
            title: 'Error!',
            message: data.message,
            status: 'error',
          });
        });

        throw new Error('something went wrong with fetching');
      })
      .then(data => {
        setNotification({
          title: 'Great!',
          message: data.message,
          status: 'success',
        });
        setEmail('');
        setName('');
        setMessage('');
        setTimeout(() => {
          router.push('/');
        }, 2500);
      })
      .catch(err => {
        console.error(err);
        setNotification({
          title: 'Error catch!',
          message: err.message,
          status: 'error',
        });
      });
  };
  return (
    <>
      <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={submitMessageHandler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.currentTarget.value)
                }
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.currentTarget.value)
                }
              />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your message</label>
            <textarea
              rows={5}
              id="message"
              required
              value={message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.currentTarget.value)
              }
            />
          </div>
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </form>
      </section>
      {isNotificationShown && <Notification notification={notification} />}
    </>
  );
};

export default ContactForm;
