import { NextPage } from 'next';
import ContactForm from '../components/contact/contact-form';

type ContactPageProps = {};

const ContactPage: NextPage<ContactPageProps> = ({}) => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
