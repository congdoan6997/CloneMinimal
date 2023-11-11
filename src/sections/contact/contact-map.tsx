import Box from '@mui/material/Box';

type CountryData = {
  latlng: number[];
  address: string;
  phoneNumber: string;
};

type Props = {
  contacts: CountryData[];
};

export default function ContactMap() {
  return <Box></Box>;
}
