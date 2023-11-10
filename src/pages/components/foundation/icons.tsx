import { Helmet } from 'react-helmet-async';
import { IconsView } from 'src/sections/_examples/foundation';

export default function ColorPages() {
  return (
    <>
      <Helmet>
        <title>Foundation Colors</title>
      </Helmet>
      <IconsView />
    </>
  );
}
