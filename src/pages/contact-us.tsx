import { Helmet } from 'react-helmet-async';
import { ContactView } from 'src/sections/contact/view';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Contact us</title>
      </Helmet>
      <ContactView />
    </>
  );
}
