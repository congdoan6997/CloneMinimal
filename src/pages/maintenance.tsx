import { Helmet } from 'react-helmet-async';
import ViewMaintenance from 'src/sections/maintenance/view';


export default function MaintenancePage() {
  return (
    <>
      <Helmet>
        <title>Maintenance</title>
      </Helmet>
     <ViewMaintenance />
    </>
  );
}