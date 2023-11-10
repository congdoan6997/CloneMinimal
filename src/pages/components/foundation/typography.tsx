import { Helmet } from 'react-helmet-async';
import { TypographyView } from 'src/sections/_examples/foundation';

export default function ColorPages() {
  return (
    <>
      <Helmet>
        <title>Foundation Typography</title>
      </Helmet>
      <TypographyView />
    </>
  );
}