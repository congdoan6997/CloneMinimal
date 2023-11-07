import { Helmet } from 'react-helmet-async';
import ColorsView from 'src/sections/_examples/foundation/colors-view';

export default function ColorPages() {
  return (
    <>
      <Helmet>
        <title>Foundation Colors</title>
      </Helmet>
      <ColorsView />
    </>
  );
}
