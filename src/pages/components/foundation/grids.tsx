import { Helmet } from 'react-helmet-async';
import { GridsView } from 'src/sections/_examples/foundation';

export default function ColorPages() {
  return (
    <>
      <Helmet>
        <title>Foundation Grids</title>
      </Helmet>
      <GridsView />
    </>
  );
}
