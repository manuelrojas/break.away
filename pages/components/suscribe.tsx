import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';
import NewsletterForm from './form';

const NewsletterSubscribe = () => {

  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL as string;
  console.log(MAILCHIMP_URL)
  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={ status as string }
            message={ message as string }
            onValidated={ (formData: EmailFormFields) => subscribe( formData ) }
          />
        );
      } }
    />
  );
};

export default NewsletterSubscribe;