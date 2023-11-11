import { Helmet } from 'react-helmet-async';
import { View404 } from 'src/sections/error';



export default function Page404 () {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found!</title>
      </Helmet>
      <View404/>
    </>
  );
}