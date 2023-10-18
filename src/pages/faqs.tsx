import { Helmet } from 'react-helmet-async';
import { FaqsView } from 'src/sections/faqs/view';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Faqs</title>
      </Helmet>
      <FaqsView />
    </>
  );
}
