import { Helmet } from 'react-helmet-async';
import { DocsView } from 'src/sections/docs/view';

export default function DocsPage() {
  return (
    <>
      <Helmet>
        <title>Docs</title>
      </Helmet>
      <DocsView />
    </>
  );
}
