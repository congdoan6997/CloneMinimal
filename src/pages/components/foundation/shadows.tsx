import { Helmet } from 'react-helmet-async';
import { ShadowsView } from 'src/sections/_examples/foundation';

export default function ColorPages() {
  return (
    <>
      <Helmet>
        <title>Foundation Shadows</title>
      </Helmet>
      <ShadowsView />
    </>
  );
}
