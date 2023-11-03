import Paper from '@mui/material/Paper';
import TextMaxLine from 'src/components/tetx-max-line';
import Image from 'src/components/image';
type Props = {
  category: {
    label: string;
    icon: string;
  };
};

export default function CardDesktop({ category }: Props) {
  const { label, icon } = category;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: 'unset',
        cursor: 'pointer',
        textAlign: 'center',
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z20,
        },
      }}
    >
      <Image disabledEffect alt={icon} src={icon} sx={{ width: 80, height: 80, mx: 'auto' }} />
      <TextMaxLine variant="subtitle2" persistent>
        {label}
      </TextMaxLine>
    </Paper>
  );
}
