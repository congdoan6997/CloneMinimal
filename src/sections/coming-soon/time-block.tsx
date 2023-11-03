import Box from '@mui/material/Box';

type Props = {
  label: string;
  value: string;
};

export default function TimeBlock({ label, value }: Props) {
  return (
    <div>
      <Box>{value}</Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}
