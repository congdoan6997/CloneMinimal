import Typography from '@mui/material/Typography';

export default function LabelProgress({ text }: { text: string }) {
  return (
    <Typography component={'div'} variant="overline" sx={{ color: 'text.secondary', mb: 1 }}>
      {text}
    </Typography>
  );
}
