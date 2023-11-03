import { Helmet } from 'react-helmet-async';
import { ViewComingSoon } from 'src/sections/coming-soon';


export default function ComingSoonPage() {
  return (
    <>
      <Helmet>
        <title>Coming soon</title>
      </Helmet>
      <ViewComingSoon />
    </>
  );
}